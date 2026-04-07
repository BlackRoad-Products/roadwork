export interface Env { STORE: KVNamespace; DB: D1Database; SERVICE_NAME: string; VERSION: string; }
const SVC = "roadwork";
function json(d: unknown, s = 200) { return new Response(JSON.stringify(d,null,2),{status:s,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","X-BlackRoad-Service":SVC}}); }
async function track(env: Env, req: Request, path: string) { const cf=(req as any).cf||{}; env.DB.prepare("INSERT INTO analytics(subdomain,path,country,ua,ts)VALUES(?,?,?,?,?)").bind(SVC,path,cf.country||"",req.headers.get("User-Agent")?.slice(0,150)||"",Date.now()).run().catch(()=>{}); }

type Status = "todo"|"doing"|"done"|"blocked";
const COLS: Status[] = ["todo","doing","done","blocked"];
const COL_COLORS: Record<Status,string> = {todo:"#444",doing:"#3E84FF",done:"#00E676",blocked:"#FF2255"};

async function getTasks(env: Env): Promise<any[]> {
  const list=await env.STORE.list({prefix:"task:"});
  const tasks=await Promise.all(list.keys.map(async k=>{const v=await env.STORE.get(k.name);return v?JSON.parse(v):null;}));
  return tasks.filter(Boolean).sort((a:any,b:any)=>b.ts-a.ts);
}
async function getPulseAlerts(env: Env): Promise<any[]> {
  const {results}=await env.DB.prepare("SELECT services_down,ts FROM pulse_snapshots WHERE services_down!='[]' ORDER BY ts DESC LIMIT 5").all().catch(()=>({results:[]}));
  return (results as any[]).map(r=>({services:JSON.parse(r.services_down||'[]'),ts:r.ts})).filter((r:any)=>r.services.length);
}

function page(tasks: any[], alerts: any[]): Response {
  const byCol: Record<Status,any[]> = {todo:[],doing:[],done:[],blocked:[]};
  for(const t of tasks) if(byCol[t.status as Status]) byCol[t.status as Status].push(t);

  const html=`<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><title>RoadWork — Task Manager</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#030303;--card:#0a0a0a;--border:#111;--text:#f0f0f0;--sub:#444;--orange:#FF6B2B;--grad:linear-gradient(135deg,#FF6B2B,#FF6B2B)}
html,body{min-height:100vh;background:var(--bg);color:var(--text);font-family:'Space Grotesk',sans-serif}
.grad-bar{height:2px;background:var(--grad)}
.wrap{max-width:1200px;margin:0 auto;padding:24px 20px}
.header{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px}
h1{font-size:1.5rem;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.add-btn{padding:9px 18px;background:var(--orange);color:#000;border:none;border-radius:7px;cursor:pointer;font-weight:700;font-size:.82rem}
.alerts{margin-bottom:16px}
.alert{padding:8px 14px;background:rgba(255,34,85,.08);border:1px solid rgba(255,34,85,.2);border-radius:6px;font-size:.75rem;margin-bottom:5px;color:#FF2255;font-family:'JetBrains Mono',monospace}
.board{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.col{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:14px;min-height:300px}
.col-header{display:flex;align-items:center;gap:8px;margin-bottom:12px}
.col-dot{width:8px;height:8px;border-radius:50%}
.col-title{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;font-family:'JetBrains Mono',monospace}
.col-count{font-size:.65rem;color:var(--sub);font-family:'JetBrains Mono',monospace}
.task{background:#0d0d0d;border:1px solid var(--border);border-radius:7px;padding:10px;margin-bottom:7px;cursor:grab;transition:border-color .15s}
.task:hover{border-color:#1a1a1a}
.task-title{font-size:.8rem;font-weight:600;margin-bottom:4px}
.task-meta{font-size:.65rem;color:var(--sub);font-family:'JetBrains Mono',monospace;display:flex;gap:8px}
.task-tag{padding:1px 6px;border-radius:3px;background:#111;border:1px solid #1a1a1a}
.add-form{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:20px;margin-bottom:20px;display:none}
.add-form.open{display:block}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
input,select,textarea{width:100%;padding:8px 12px;background:#0d0d0d;border:1px solid var(--border);border-radius:6px;color:var(--text);font-family:'Space Grotesk',sans-serif;font-size:.82rem;outline:none}
input:focus,select:focus{border-color:var(--orange)}
.form-btn{margin-top:10px;padding:9px 20px;background:var(--orange);color:#000;border:none;border-radius:6px;cursor:pointer;font-weight:700;font-size:.82rem}
@media(max-width:700px){.board{grid-template-columns:1fr 1fr}}
</style></head><body>
<div class="grad-bar"></div>
<div class="wrap">
<div class="header"><h1>RoadWork</h1><button class="add-btn" onclick="toggleForm()">+ Add Task</button></div>

${alerts.length?`<div class="alerts"><div style="font-size:.65rem;color:#FF2255;font-family:'JetBrains Mono',monospace;margin-bottom:6px;text-transform:uppercase;letter-spacing:.08em">⚠ Pulse Alerts — Auto-Tasks</div>${alerts.map(a=>`<div class="alert">Services down: ${a.services.join(', ')} · ${new Date(a.ts).toLocaleTimeString()}</div>`).join("")}</div>`:""}

<div class="add-form" id="add-form">
  <div class="form-grid">
    <div><label style="font-size:.65rem;color:var(--sub);font-family:'JetBrains Mono',monospace;display:block;margin-bottom:4px">TITLE</label><input type="text" id="t-title" placeholder="What needs doing?"></div>
    <div><label style="font-size:.65rem;color:var(--sub);font-family:'JetBrains Mono',monospace;display:block;margin-bottom:4px">STATUS</label><select id="t-status">${COLS.map(c=>`<option>${c}</option>`).join("")}</select></div>
    <div><label style="font-size:.65rem;color:var(--sub);font-family:'JetBrains Mono',monospace;display:block;margin-bottom:4px">SERVICE</label><input type="text" id="t-service" placeholder="roadwork, highway..."></div>
    <div><label style="font-size:.65rem;color:var(--sub);font-family:'JetBrains Mono',monospace;display:block;margin-bottom:4px">PRIORITY</label><select id="t-priority"><option>low</option><option selected>normal</option><option>high</option><option>critical</option></select></div>
  </div>
  <button class="form-btn" onclick="addTask()">Add Task</button>
</div>

<div class="board">
${COLS.map(col=>`<div class="col" id="col-${col}">
  <div class="col-header"><div class="col-dot" style="background:${COL_COLORS[col]}"></div><div class="col-title" style="color:${COL_COLORS[col]}">${col}</div><div class="col-count">${byCol[col].length}</div></div>
  ${byCol[col].map(t=>`<div class="task" draggable="true" data-id="${t.id}">
    <div class="task-title">${t.title}</div>
    <div class="task-meta"><span class="task-tag">${t.priority||'normal'}</span>${t.service?`<span>${t.service}</span>`:''}<span>${new Date(t.ts).toLocaleDateString()}</span></div>
  </div>`).join("")}
</div>`).join("")}
</div>
</div>
<script src="https://cdn.blackroad.io/br.js"></script>
<script>
function toggleForm(){var f=document.getElementById('add-form');f.className=f.className.includes('open')?'add-form':'add-form open';}
async function addTask(){
  var title=document.getElementById('t-title').value.trim();if(!title)return;
  await fetch('/api/tasks',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({title,status:document.getElementById('t-status').value,service:document.getElementById('t-service').value,priority:document.getElementById('t-priority').value})});
  location.reload();
}
async function moveTask(id,status){await fetch('/api/tasks/'+id,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({status})});}
document.querySelectorAll('.task').forEach(function(el){
  el.addEventListener('dragstart',function(e){e.dataTransfer.setData('id',el.dataset.id);});
});
document.querySelectorAll('.col').forEach(function(col){
  col.addEventListener('dragover',function(e){e.preventDefault();});
  col.addEventListener('drop',function(e){
    e.preventDefault();var id=e.dataTransfer.getData('id');
    var status=col.id.replace('col-','');
    moveTask(id,status).then(()=>location.reload());
  });
});
</script>
</body></html>`;
  return new Response(html,{headers:{"Content-Type":"text/html;charset=UTF-8"}});
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    if(req.method==="OPTIONS")return new Response(null,{status:204,headers:{"Access-Control-Allow-Origin":"*"}});
    const url=new URL(req.url);const path=url.pathname;const parts=path.split("/").filter(Boolean);
    track(env,req,path);
    if(path==="/health")return json({service:SVC,status:"ok",version:env.VERSION,ts:Date.now()});
    if(path==="/api/tasks"&&req.method==="GET"){const tasks=await getTasks(env);return json({tasks});}
    if(path==="/api/tasks"&&req.method==="POST"){
      const b=await req.json() as any;
      const id=crypto.randomUUID();
      await env.STORE.put(`task:${id}`,JSON.stringify({id,title:b.title,status:b.status||"todo",service:b.service||"",priority:b.priority||"normal",ts:Date.now()}));
      return json({ok:true,id});
    }
    if(parts[0]==="api"&&parts[1]==="tasks"&&parts[2]&&req.method==="PATCH"){
      const raw=await env.STORE.get(`task:${parts[2]}`);
      if(!raw)return json({error:"Not found"},404);
      const task=JSON.parse(raw);const b=await req.json() as any;
      await env.STORE.put(`task:${parts[2]}`,JSON.stringify({...task,...b}));
      return json({ok:true});
    }
    if(parts[0]==="api"&&parts[1]==="tasks"&&parts[2]&&req.method==="DELETE"){
      await env.STORE.delete(`task:${parts[2]}`);return json({ok:true});
    }
    const [tasks,alerts]=await Promise.all([getTasks(env),getPulseAlerts(env)]);
    return page(tasks,alerts);
  }
};
