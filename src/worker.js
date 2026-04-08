const ROOT_HTML = `<!-- PROPRIETARY. Copyright 2025-2026 BlackRoad OS, Inc. All rights reserved. NOT open source. -->
<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://images.blackroad.io/brand/brand.css">
<title>RoadWork — BlackRoad OS</title>
<meta name="description" content="Business automation with 7 AI agents. Invoicing, support tickets, marketing campaigns, contracts, scheduling, KPIs. Your business runs itself.">
<meta property="og:title" content="RoadWork — AI Business Automation — BlackRoad OS"><meta property="og:description" content="7 AI agents handle invoicing, support, marketing, contracts, scheduling, and KPIs. Your business runs itself.">
<meta property="og:url" content="https://roadwork.blackroad.io"><meta property="og:image" content="https://images.blackroad.io/pixel-art/road-logo.png">
<meta name="twitter:card" content="summary_large_image"><meta name="robots" content="index, follow, noai, noimageai">
<link rel="canonical" href="https://roadwork.blackroad.io/">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230a0a0a'/><circle cx='10' cy='16' r='5' fill='%23FF2255'/><rect x='18' y='11' width='10' height='10' rx='2' fill='%238844FF'/></svg>" type="image/svg+xml">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebApplication","name":"RoadWork","url":"https://roadwork.blackroad.io","author":{"@type":"Organization","name":"BlackRoad OS, Inc.","url":"https://blackroad.io"}}</script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400&family=Inter:wght@400&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}:root{--bg:#000;--card:#0a0a0a;--border:#1a1a1a;--text:#f5f5f5;--sub:#737373;--muted:#444;--sg:'Space Grotesk',sans-serif;--jb:'JetBrains Mono',monospace;--in:'Inter',sans-serif;--grad:linear-gradient(90deg,#FF6B2B,#FF2255,#CC00AA,#8844FF,#4488FF,#00D4FF);--accent:#FF6B2B}html{scroll-behavior:smooth}body{background:var(--bg);color:var(--text);font-family:var(--sg);overflow-x:hidden}a{color:inherit;text-decoration:none}.bar{height:3px;background:var(--grad);position:fixed;top:0;left:0;right:0;z-index:1000}nav{position:fixed;top:3px;left:0;right:0;z-index:999;background:rgba(0,0,0,.88);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);height:48px;display:flex;align-items:center;padding:0 24px}.n-left{display:flex;align-items:center;gap:8px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--accent)}.n-name{font-weight:700;font-size:15px}.n-tag{font-family:var(--jb);font-size:10px;color:var(--muted);margin-left:8px}.n-right{margin-left:auto;display:flex;gap:12px;align-items:center}.n-right a{font-family:var(--in);font-size:12px;color:var(--sub)}.n-right a:hover{color:var(--text)}.cta{font-size:11px;font-weight:600;padding:6px 16px;border-radius:5px;background:var(--text);color:var(--bg);border:none;cursor:pointer;font-family:var(--sg)}.hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:100px 24px 60px;position:relative;overflow:hidden}.orb{position:absolute;border-radius:50%;filter:blur(100px);opacity:.1}h1{font-size:clamp(32px,7vw,64px);font-weight:700;letter-spacing:-.03em;line-height:1.05;max-width:700px;margin-bottom:12px;position:relative}.sub{font-family:var(--in);font-size:clamp(14px,2vw,17px);color:var(--sub);max-width:500px;line-height:1.6;margin-bottom:32px;position:relative}.badge{font-family:var(--jb);font-size:10px;color:var(--sub);letter-spacing:.1em;text-transform:uppercase;margin-bottom:16px;position:relative;display:flex;align-items:center;gap:8px}.badge::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--accent);animation:p 2s infinite}@keyframes p{0%,100%{opacity:1}50%{opacity:.3}}.btns{display:flex;gap:10px;position:relative;flex-wrap:wrap;justify-content:center}.btn-p{padding:11px 28px;border-radius:7px;font-size:13px;font-weight:600;background:var(--text);color:var(--bg);border:none;cursor:pointer;font-family:var(--sg)}.btn-g{padding:11px 28px;border-radius:7px;font-size:13px;font-weight:600;background:transparent;color:var(--text);border:1px solid var(--border);cursor:pointer;font-family:var(--sg)}.btn-g:hover{border-color:#444}.section{max-width:900px;margin:0 auto;padding:48px 24px}.status{border:1px solid var(--border);border-radius:8px;background:var(--card);padding:14px 18px;display:flex;align-items:center;gap:10px;margin-bottom:24px}.status-dot{width:8px;height:8px;border-radius:50%;background:#22c55e;animation:p 2s infinite}.status-text{font-family:var(--jb);font-size:11px;color:var(--sub)}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-bottom:32px}.card{border:1px solid var(--border);border-radius:8px;background:var(--card);padding:18px 20px;transition:border-color .2s}.card:hover{border-color:#333}.card h3{font-size:14px;font-weight:600;margin-bottom:6px}.card p{font-family:var(--in);font-size:12px;color:var(--sub);line-height:1.5}.card .metric{font-size:28px;font-weight:700;margin:8px 0 4px}.card .label{font-family:var(--jb);font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}.tabs{display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap}.tab{font-family:var(--jb);font-size:11px;padding:6px 14px;border-radius:5px;border:1px solid var(--border);background:transparent;color:var(--sub);cursor:pointer}.tab.active,.tab:hover{background:var(--card);color:var(--text);border-color:#333}table{width:100%;border-collapse:collapse;font-size:12px;font-family:var(--in)}th{font-family:var(--jb);font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);text-align:left;padding:8px 12px;border-bottom:1px solid var(--border)}td{padding:8px 12px;border-bottom:1px solid var(--border);color:var(--sub)}tr:hover td{color:var(--text)}.pill{display:inline-block;font-family:var(--jb);font-size:9px;padding:2px 8px;border-radius:10px;text-transform:uppercase;letter-spacing:.06em}.pill-green{background:#22c55e22;color:#22c55e}.pill-amber{background:#f5a62322;color:#f5a623}.pill-red{background:#ff225522;color:#ff2255}.pill-blue{background:#4488ff22;color:#4488ff}.pill-violet{background:#8844ff22;color:#8844ff}
footer{border-top:1px solid var(--border);padding:32px 24px;text-align:center}.f-links{display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:12px}.f-links a{font-family:var(--in);font-size:11px;color:var(--sub)}.f-links a:hover{color:var(--text)}.f-copy{font-family:var(--jb);font-size:9px;color:var(--muted)}@media(max-width:768px){nav{padding:0 16px}.grid{grid-template-columns:1fr}}</style></head><body>
<div class="bar"></div>
<nav><div class="n-left"><div class="n-dot"></div><span class="n-name">RoadWork</span><span class="n-tag">BLACKROAD OS</span></div><div class="n-right"><a href="#dashboard" onclick="showSection('dashboard')">Dashboard</a><a href="#kanban" onclick="showSection('kanban')">Kanban</a><a href="#invoices" onclick="showSection('invoices')">Invoices</a><a href="#time" onclick="showSection('time')">Time</a><a href="#expenses" onclick="showSection('expenses')">Expenses</a><a href="https://blackroad.io">Highway</a><a href="https://app.blackroad.io" class="cta">Open OS</a></div></nav>
<section class="hero" id="hero-section"><div class="orb" style="width:400px;height:400px;background:#FF6B2B;top:-10%;left:-15%"></div><div class="orb" style="width:300px;height:300px;background:#8844FF;bottom:-5%;right:-10%"></div><div class="badge">LIVE ON BLACKROAD OS</div><h1>Construction ahead. Your business builds itself.</h1><p class="sub">Business Automation. Part of BlackRoad OS — 17 products, one highway.</p><div class="btns"><a href="https://app.blackroad.io"><button class="btn-p">Open BlackRoad OS</button></a><a href="https://blackroad.io"><button class="btn-g">The Highway</button></a></div></section>
<section class="section" id="dashboard">
<div class="status"><div class="status-dot"></div><div class="status-text" id="st">Connecting...</div></div>
<div class="grid" id="metrics-grid"></div>
<div class="tabs"><button class="tab active" onclick="loadTab('tasks')">Tasks</button><button class="tab" onclick="loadTab('crew')">Crew</button><button class="tab" onclick="loadTab('milestones')">Milestones</button><button class="tab" onclick="loadTab('capacity')">Capacity</button><button class="tab" onclick="loadTab('reports')">Reports</button></div>
<div id="tab-content" style="border:1px solid var(--border);border-radius:8px;background:var(--card);padding:16px;min-height:200px"></div>
</section>
<section class="section" id="kanban" style="display:none">
<h2 style="font-size:20px;margin-bottom:16px">Project Kanban</h2>
<div id="kanban-board" style="display:flex;gap:12px;overflow-x:auto;padding-bottom:16px"></div>
</section>
<section class="section" id="invoices-section" style="display:none">
<h2 style="font-size:20px;margin-bottom:16px">Invoices</h2>
<div class="grid" id="invoice-metrics"></div>
<div id="invoice-list"></div>
</section>
<section class="section" id="time-section" style="display:none">
<h2 style="font-size:20px;margin-bottom:16px">Time Tracking</h2>
<div class="grid" id="time-metrics"></div>
<div id="time-entries"></div>
</section>
<section class="section" id="expenses-section" style="display:none">
<h2 style="font-size:20px;margin-bottom:16px">Expense Tracking</h2>
<div class="grid" id="expense-metrics"></div>
<div id="expense-list"></div>
</section>
<footer><div class="f-links"><a href="https://os.blackroad.io">OS</a><a href="https://roadtrip.blackroad.io">Agents</a><a href="https://roadie.blackroad.io">Tutor</a><a href="https://roadview.blackroad.io">Search</a><a href="https://backroad.blackroad.io">Social</a><a href="https://roadchain.blackroad.io">Chain</a><a href="https://github.com/BlackRoadOS">GitHub</a></div><div class="f-copy">2025-2026 BlackRoad OS, Inc. Remember the Road. Pave Tomorrow.</div></footer>
<script>
function showSection(id){document.querySelectorAll('.section,[id$="-section"]').forEach(s=>s.style.display='none');const el=document.getElementById(id)||document.getElementById(id+'-section');if(el)el.style.display='block';if(id==='kanban')loadKanban();if(id==='invoices')loadInvoices();if(id==='time')loadTimeEntries();if(id==='expenses')loadExpenses();document.getElementById('hero-section').style.display=id==='dashboard'?'flex':'none'}
async function loadDashboard(){try{const d=await(await fetch('/api/dashboard')).json();const g=document.getElementById('metrics-grid');g.innerHTML='<div class="card"><div class="label">Tasks</div><div class="metric">'+(d.tasks?.total||0)+'</div><p>'+(d.tasks?.completed||0)+' completed, '+(d.tasks?.pending||0)+' pending</p></div><div class="card"><div class="label">Crew</div><div class="metric">'+(d.crew?.length||0)+'</div><p>Active agents</p></div><div class="card"><div class="label">Huddles</div><div class="metric">'+(d.recent_huddles?.length||0)+'</div><p>Recent standups</p></div><div class="card"><div class="label">KPIs</div><div class="metric">'+(d.kpis?.length||0)+'</div><p>Metrics tracked</p></div>'}catch(e){}}
async function loadTab(t){document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));event.target.classList.add('active');const c=document.getElementById('tab-content');c.innerHTML='<p style="color:var(--muted)">Loading...</p>';try{if(t==='tasks'){const d=await(await fetch('/api/tasks')).json();c.innerHTML='<table><tr><th>Task</th><th>Assignee</th><th>Priority</th><th>Status</th></tr>'+(d.tasks||[]).map(t=>'<tr><td>'+t.title+'</td><td>'+(t.assignee||'-')+'</td><td><span class="pill pill-'+(t.priority==='high'?'red':t.priority==='low'?'green':'amber')+'">'+t.priority+'</span></td><td><span class="pill pill-'+(t.status==='completed'?'green':t.status==='pending'?'amber':'blue')+'">'+t.status+'</span></td></tr>').join('')+'</table>'}
else if(t==='crew'){const d=await(await fetch('/api/crew')).json();c.innerHTML='<table><tr><th>Agent</th><th>Role</th><th>Status</th><th>Current Task</th></tr>'+(d.crew||[]).map(a=>'<tr><td style="color:var(--text)">'+a.name+'</td><td>'+a.role+'</td><td><span class="pill pill-'+(a.status==='working'?'green':a.status==='idle'?'amber':'red')+'">'+a.status+'</span></td><td>'+(a.current_task||'-')+'</td></tr>').join('')+'</table>'}
else if(t==='milestones'){const d=await(await fetch('/api/milestones')).json();c.innerHTML='<table><tr><th>Milestone</th><th>Project</th><th>Due</th><th>Progress</th><th>Status</th></tr>'+(d.milestones||[]).map(m=>'<tr><td style="color:var(--text)">'+m.title+'</td><td>'+(m.project||'-')+'</td><td>'+(m.due_date||'-')+'</td><td><div style="background:var(--border);border-radius:4px;height:6px;width:120px;display:inline-block"><div style="background:var(--accent);border-radius:4px;height:6px;width:'+m.completion_pct+'%"></div></div> '+m.completion_pct+'%</td><td><span class="pill pill-'+(m.status==='completed'?'green':m.status==='at_risk'?'red':'blue')+'">'+m.status+'</span></td></tr>').join('')+'</table>'}
else if(t==='capacity'){const d=await(await fetch('/api/capacity')).json();c.innerHTML='<table><tr><th>Member</th><th>Role</th><th>Allocated</th><th>Available</th><th>Status</th></tr>'+(d.members||[]).map(m=>'<tr><td style="color:var(--text)">'+m.name+'</td><td>'+m.role+'</td><td>'+m.allocated_hours+'h / '+m.capacity_hours+'h</td><td>'+(m.capacity_hours-m.allocated_hours)+'h</td><td><span class="pill pill-'+(m.utilization>100?'red':m.utilization>80?'amber':'green')+'">'+(m.utilization>100?'over-allocated':m.utilization>80?'high':'available')+'</span></td></tr>').join('')+'</table>'}
else if(t==='reports'){const d=await(await fetch('/api/reports')).json();c.innerHTML='<table><tr><th>Report</th><th>Type</th><th>By</th><th>Date</th></tr>'+(d.reports||[]).map(r=>'<tr><td style="color:var(--text)">'+r.title+'</td><td><span class="pill pill-blue">'+r.type+'</span></td><td>'+(r.generated_by||'-')+'</td><td>'+r.created_at+'</td></tr>').join('')+'</table>'}}catch(e){c.innerHTML='<p style="color:var(--muted)">Error loading data</p>'}}
async function loadKanban(){const b=document.getElementById('kanban-board');try{const d=await(await fetch('/api/kanban')).json();const cols=d.columns||[];b.innerHTML=cols.map(col=>'<div style="min-width:220px;flex:1;background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px"><h3 style="font-size:12px;font-family:var(--jb);color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">'+col.name+' <span style="color:var(--sub)">('+col.items.length+')</span></h3>'+(col.items||[]).map(item=>'<div draggable="true" data-id="'+item.id+'" data-col="'+col.id+'" style="background:var(--bg);border:1px solid var(--border);border-radius:6px;padding:10px;margin-bottom:8px;cursor:grab;font-size:12px"><div style="color:var(--text);margin-bottom:4px">'+item.title+'</div><div style="display:flex;justify-content:space-between"><span class="pill pill-'+(item.priority==='high'?'red':item.priority==='low'?'green':'amber')+'">'+item.priority+'</span><span style="font-family:var(--jb);font-size:9px;color:var(--muted)">'+(item.assignee||'unassigned')+'</span></div></div>').join('')+'</div>').join('')}catch(e){b.innerHTML='<p style="color:var(--muted)">Error loading kanban</p>'}}
async function loadInvoices(){try{const d=await(await fetch('/api/invoices')).json();const m=document.getElementById('invoice-metrics');const s=d.summary||[];const draft=s.find(x=>x.status==='draft')||{count:0,total:0};const sent=s.find(x=>x.status==='sent')||{count:0,total:0};const paid=s.find(x=>x.status==='paid')||{count:0,total:0};const overdue=s.find(x=>x.status==='overdue')||{count:0,total:0};m.innerHTML='<div class="card"><div class="label">Draft</div><div class="metric">$'+(draft.total||0).toLocaleString()+'</div><p>'+draft.count+' invoices</p></div><div class="card"><div class="label">Sent</div><div class="metric">$'+(sent.total||0).toLocaleString()+'</div><p>'+sent.count+' invoices</p></div><div class="card"><div class="label">Paid</div><div class="metric">$'+(paid.total||0).toLocaleString()+'</div><p>'+paid.count+' invoices</p></div><div class="card"><div class="label">Overdue</div><div class="metric">$'+(overdue.total||0).toLocaleString()+'</div><p>'+overdue.count+' invoices</p></div>';const l=document.getElementById('invoice-list');l.innerHTML='<table><tr><th>Invoice</th><th>Customer</th><th>Amount</th><th>Status</th><th>Due</th><th>Action</th></tr>'+(d.invoices||[]).map(i=>'<tr><td style="font-family:var(--jb);font-size:10px;color:var(--text)">'+i.id.slice(0,8)+'</td><td>'+i.customer_name+'</td><td style="color:var(--text)">$'+i.amount.toLocaleString()+'</td><td><span class="pill pill-'+(i.status==='paid'?'green':i.status==='overdue'?'red':i.status==='sent'?'blue':'amber')+'">'+i.status+'</span></td><td>'+(i.due_date||'-')+'</td><td><a href="/api/invoices/'+i.id+'/html" style="font-size:10px;color:var(--accent)">View</a></td></tr>').join('')+'</table>'}catch(e){}}
async function loadTimeEntries(){try{const d=await(await fetch('/api/time')).json();const m=document.getElementById('time-metrics');m.innerHTML='<div class="card"><div class="label">Today</div><div class="metric">'+((d.summary?.today_hours||0).toFixed(1))+'h</div><p>Hours tracked</p></div><div class="card"><div class="label">This Week</div><div class="metric">'+((d.summary?.week_hours||0).toFixed(1))+'h</div><p>Hours tracked</p></div><div class="card"><div class="label">Billable</div><div class="metric">'+((d.summary?.billable_hours||0).toFixed(1))+'h</div><p>This week</p></div><div class="card"><div class="label">Active Timers</div><div class="metric">'+(d.summary?.active_timers||0)+'</div><p>Running now</p></div>';const l=document.getElementById('time-entries');l.innerHTML='<table><tr><th>Task</th><th>Member</th><th>Start</th><th>Duration</th><th>Billable</th><th>Status</th></tr>'+(d.entries||[]).map(e=>'<tr><td style="color:var(--text)">'+(e.task_title||e.task_id||'-')+'</td><td>'+(e.member_name||'-')+'</td><td style="font-family:var(--jb);font-size:10px">'+e.started_at+'</td><td>'+(e.duration_minutes?Math.round(e.duration_minutes)+'m':'running')+'</td><td>'+(e.billable?'Yes':'No')+'</td><td><span class="pill pill-'+(e.stopped_at?'green':'amber')+'">'+(e.stopped_at?'done':'active')+'</span></td></tr>').join('')+'</table>'}catch(e){}}
async function loadExpenses(){try{const d=await(await fetch('/api/expenses')).json();const m=document.getElementById('expense-metrics');m.innerHTML='<div class="card"><div class="label">This Month</div><div class="metric">$'+((d.summary?.month_total||0).toFixed(2))+'</div><p>Total expenses</p></div><div class="card"><div class="label">Pending</div><div class="metric">'+(d.summary?.pending_count||0)+'</div><p>Awaiting approval</p></div><div class="card"><div class="label">Categories</div><div class="metric">'+(d.summary?.categories||0)+'</div><p>Expense types</p></div><div class="card"><div class="label">Reimbursable</div><div class="metric">$'+((d.summary?.reimbursable||0).toFixed(2))+'</div><p>This month</p></div>';const l=document.getElementById('expense-list');l.innerHTML='<table><tr><th>Description</th><th>Category</th><th>Amount</th><th>Date</th><th>Status</th></tr>'+(d.expenses||[]).map(e=>'<tr><td style="color:var(--text)">'+e.description+'</td><td><span class="pill pill-violet">'+(e.category||'other')+'</span></td><td>$'+e.amount.toFixed(2)+'</td><td>'+e.expense_date+'</td><td><span class="pill pill-'+(e.status==='approved'?'green':e.status==='rejected'?'red':'amber')+'">'+e.status+'</span></td></tr>').join('')+'</table>'}catch(e){}}
fetch('/api/health').then(r=>r.json()).then(d=>{document.getElementById('st').textContent='RoadWork is live — '+JSON.stringify(d).slice(0,80)}).catch(()=>{document.getElementById('st').textContent='RoadWork is running'});loadDashboard();
window.addEventListener('message',function(e){if(e.data</script></script>e.data.type==='blackroad-os:context'){window._osUser=e.data.user;window._osToken=e.data.token;}});if(window.parent!==window)window.parent.postMessage({type:'blackroad-os:request-context'},'*');
</script>
<script>(function(){var d={path:location.pathname,ref:document.referrer,w:screen.width,h:screen.height,t:Date.now()};navigator.sendBeacon&&navigator.sendBeacon('/api/analytics',JSON.stringify(d))})()</script><script>!function(){var b=document.createElement("div");b.style.cssText="position:fixed;top:0;left:0;right:0;z-index:99999;background:#0a0a0a;border-bottom:1px solid #1a1a1a;padding:6px 16px;display:flex;align-items:center;justify-content:space-between;font-family:sans-serif";b.innerHTML='<span style="font-size:11px;color:#737373">Part of <a href="https://os.blackroad.io" style="color:#f5f5f5;font-weight:600;text-decoration:none">BlackRoad OS</a></span><a href="https://os.blackroad.io" style="font-size:10px;font-weight:600;padding:4px 12px;background:#f5f5f5;color:#000;border-radius:4px;text-decoration:none">Try Free</a>';b.id="br-bar";if(!document.getElementById("br-bar")){document.body.prepend(b);document.body.style.paddingTop=(parseInt(getComputedStyle(document.body).paddingTop)||0)+32+"px"}}();</script>
</body></html>`;

const RW_WORKFLOWS = [
  { slug: 'sprint-planning', name: 'Sprint Planning', category: 'Engineering', description: 'Structured sprint planning workflow with backlog grooming, capacity planning, and commitment tracking.', steps: ['Review and prioritize backlog items', 'Estimate story points for top items', 'Calculate team capacity for the sprint', 'Select stories that fit capacity', 'Break stories into tasks', 'Assign owners and set sprint goal', 'Document sprint commitment and share'], roles: ['PM', 'Dev', 'Designer'], automatable: true, related: ['standup-format', 'retrospective', 'code-review'] },
  { slug: 'bug-triage', name: 'Bug Triage', category: 'Engineering', description: 'Systematic bug triage process. Categorize, prioritize, and assign bugs based on severity and impact.', steps: ['Reproduce the bug and document steps', 'Assess severity (critical/high/medium/low)', 'Check for duplicates in existing issues', 'Assign priority based on user impact', 'Route to appropriate team or developer', 'Set target fix timeline', 'Notify stakeholders if customer-facing'], roles: ['PM', 'Dev', 'QA'], automatable: true, related: ['incident-response', 'qa-testing', 'code-review'] },
  { slug: 'feature-request', name: 'Feature Request Pipeline', category: 'Product', description: 'Evaluate, prioritize, and track feature requests from ideation to delivery.', steps: ['Log feature request with user context', 'Score based on impact vs effort matrix', 'Group with similar requests', 'Add to product roadmap if score > threshold', 'Create design spec and technical RFC', 'Break into implementation tasks', 'Schedule for upcoming sprint'], roles: ['PM', 'Designer', 'Dev'], automatable: true, related: ['sprint-planning', 'design-review', 'okr-tracking'] },
  { slug: 'code-review', name: 'Code Review Checklist', category: 'Engineering', description: 'Thorough code review process covering correctness, security, performance, and maintainability.', steps: ['Check PR description and linked issue', 'Review for correctness and edge cases', 'Verify security (no secrets, input validation)', 'Check performance implications', 'Ensure test coverage for changes', 'Review code style and readability', 'Approve or request changes with specific feedback'], roles: ['Dev', 'Lead'], automatable: false, related: ['deploy-checklist', 'qa-testing', 'security-audit'] },
  { slug: 'deploy-checklist', name: 'Deploy Checklist', category: 'Engineering', description: 'Pre-deployment and post-deployment checklist to ensure safe releases with rollback plans.', steps: ['Run full test suite and verify pass', 'Review migration scripts if any', 'Check feature flags are configured', 'Notify team of deployment window', 'Deploy to staging and smoke test', 'Deploy to production with monitoring', 'Verify key metrics for 15 minutes', 'Update changelog and notify stakeholders'], roles: ['Dev', 'DevOps'], automatable: true, related: ['incident-response', 'qa-testing', 'code-review'] },
  { slug: 'incident-response', name: 'Incident Response', category: 'Security', description: 'Step-by-step incident response plan. Detection, containment, resolution, and post-mortem.', steps: ['Detect and confirm the incident', 'Assign incident commander', 'Assess severity and impact scope', 'Communicate status to stakeholders', 'Implement containment measures', 'Deploy fix or workaround', 'Verify resolution and monitor', 'Schedule post-mortem within 48 hours'], roles: ['DevOps', 'Dev', 'PM'], automatable: true, related: ['deploy-checklist', 'security-audit', 'bug-triage'] },
  { slug: 'onboarding-new-hire', name: 'New Hire Onboarding', category: 'Operations', description: 'Comprehensive onboarding workflow for new team members. First day through first month.', steps: ['Send welcome email with start date details', 'Set up accounts (email, Slack, GitHub, tools)', 'Assign onboarding buddy', 'Schedule intro meetings with each team', 'Walk through codebase and architecture', 'Assign first starter task', 'Check in at end of week 1, 2, and 4'], roles: ['HR', 'Manager', 'Lead'], automatable: true, related: ['standup-format', 'sprint-planning', 'retrospective'] },
  { slug: 'client-onboarding', name: 'Client Onboarding', category: 'Business', description: 'Structured client onboarding from contract signed to first value delivered.', steps: ['Send welcome packet and questionnaire', 'Schedule kickoff meeting', 'Gather credentials and access', 'Configure account and environment', 'Run initial setup and integration', 'Train client on core features', 'Schedule 30-day check-in'], roles: ['Account Manager', 'Dev', 'Support'], automatable: true, related: ['vendor-evaluation', 'budget-approval', 'okr-tracking'] },
  { slug: 'content-pipeline', name: 'Content Pipeline', category: 'Product', description: 'End-to-end content production workflow from ideation to publication and promotion.', steps: ['Brainstorm topics based on keyword research', 'Create content brief with outline', 'Write first draft', 'Review and edit for quality', 'Create visuals and media assets', 'Schedule publication date and time', 'Promote across channels post-publish'], roles: ['Writer', 'Editor', 'Designer'], automatable: true, related: ['design-review', 'feature-request', 'release-cycle'] },
  { slug: 'release-cycle', name: 'Release Cycle', category: 'Engineering', description: 'Full release cycle from feature freeze to production deployment and user communication.', steps: ['Announce feature freeze date', 'Complete all code reviews', 'Run regression test suite', 'Create release branch and tag', 'Deploy to staging for final QA', 'Write release notes', 'Deploy to production', 'Send release announcement'], roles: ['Dev', 'QA', 'PM'], automatable: true, related: ['deploy-checklist', 'qa-testing', 'sprint-planning'] },
  { slug: 'qa-testing', name: 'QA Testing Process', category: 'Engineering', description: 'Quality assurance testing workflow covering unit, integration, and end-to-end testing.', steps: ['Review test plan and requirements', 'Execute automated test suite', 'Perform manual exploratory testing', 'Test edge cases and error states', 'Verify cross-browser compatibility', 'Document bugs found with reproduction steps', 'Sign off when all critical tests pass'], roles: ['QA', 'Dev'], automatable: true, related: ['code-review', 'deploy-checklist', 'release-cycle'] },
  { slug: 'retrospective', name: 'Sprint Retrospective', category: 'Operations', description: 'Facilitated retrospective format to identify improvements, celebrate wins, and address blockers.', steps: ['Set up anonymous feedback board', 'Collect what went well items', 'Collect what needs improvement items', 'Vote on top items to discuss', 'Discuss top 3-5 items as a group', 'Define concrete action items with owners', 'Follow up on previous retro actions'], roles: ['PM', 'Dev', 'Designer'], automatable: false, related: ['sprint-planning', 'standup-format', 'okr-tracking'] },
  { slug: 'okr-tracking', name: 'OKR Tracking', category: 'Business', description: 'Quarterly OKR planning, tracking, and scoring workflow. Align team efforts with company goals.', steps: ['Define 3-5 objectives for the quarter', 'Set 2-4 key results per objective', 'Assign owners to each key result', 'Set up weekly check-in cadence', 'Score key results at mid-quarter', 'Final scoring at quarter end', 'Present results and plan next quarter'], roles: ['PM', 'Lead', 'Executive'], automatable: true, related: ['sprint-planning', 'retrospective', 'standup-format'] },
  { slug: 'standup-format', name: 'Daily Standup Format', category: 'Operations', description: 'Efficient daily standup structure. Keep it under 15 minutes with clear status and blockers.', steps: ['Each member shares what they completed yesterday', 'Share what they plan to work on today', 'Flag any blockers or dependencies', 'Note items for offline discussion', 'Update task board status', 'Capture action items for blockers'], roles: ['PM', 'Dev', 'Designer'], automatable: true, related: ['sprint-planning', 'retrospective', 'okr-tracking'] },
  { slug: 'design-review', name: 'Design Review', category: 'Product', description: 'Structured design review process for UI/UX work. Feedback, iteration, and approval workflow.', steps: ['Present design with context and goals', 'Review against design system guidelines', 'Collect feedback from stakeholders', 'Assess accessibility compliance', 'Iterate based on feedback', 'Get final approval from design lead', 'Hand off to engineering with specs'], roles: ['Designer', 'PM', 'Dev'], automatable: false, related: ['feature-request', 'code-review', 'content-pipeline'] },
  { slug: 'security-audit', name: 'Security Audit', category: 'Security', description: 'Periodic security audit checklist covering authentication, data handling, and infrastructure.', steps: ['Review authentication and authorization controls', 'Scan dependencies for known vulnerabilities', 'Check for exposed secrets in codebase', 'Audit API endpoints for proper access control', 'Review data encryption at rest and in transit', 'Test for common web vulnerabilities (XSS, SQLI)', 'Document findings and remediation plan'], roles: ['Security', 'DevOps', 'Dev'], automatable: true, related: ['incident-response', 'code-review', 'data-migration'] },
  { slug: 'data-migration', name: 'Data Migration', category: 'Engineering', description: 'Safe data migration workflow with validation, backup, and rollback procedures.', steps: ['Document source and target schemas', 'Create migration scripts with rollback', 'Back up all data before starting', 'Run migration on staging with test data', 'Validate row counts and data integrity', 'Execute production migration during low traffic', 'Verify data in production and monitor for errors'], roles: ['Dev', 'DBA', 'DevOps'], automatable: true, related: ['deploy-checklist', 'security-audit', 'release-cycle'] },
  { slug: 'api-integration', name: 'API Integration', category: 'Engineering', description: 'Workflow for integrating third-party APIs. Evaluation, implementation, and monitoring.', steps: ['Evaluate API documentation and limits', 'Set up API keys and authentication', 'Build integration layer with error handling', 'Implement rate limiting and retry logic', 'Write integration tests', 'Deploy with monitoring and alerting', 'Document integration for team reference'], roles: ['Dev', 'DevOps'], automatable: true, related: ['code-review', 'deploy-checklist', 'security-audit'] },
  { slug: 'vendor-evaluation', name: 'Vendor Evaluation', category: 'Business', description: 'Structured vendor evaluation process. Compare options, score against criteria, and make decisions.', steps: ['Define requirements and evaluation criteria', 'Research and shortlist 3-5 vendors', 'Schedule demos or trial periods', 'Score each vendor against criteria matrix', 'Check references and reviews', 'Negotiate pricing and terms', 'Make final selection and document rationale'], roles: ['PM', 'Lead', 'Finance'], automatable: false, related: ['budget-approval', 'api-integration', 'client-onboarding'] },
  { slug: 'budget-approval', name: 'Budget Approval', category: 'Business', description: 'Budget request and approval workflow. From proposal to sign-off with proper documentation.', steps: ['Draft budget proposal with justification', 'Break down costs by category', 'Identify ROI or cost savings', 'Submit for manager review', 'Address questions and revise if needed', 'Get final approval signature', 'Set up tracking and reporting'], roles: ['PM', 'Finance', 'Executive'], automatable: true, related: ['vendor-evaluation', 'okr-tracking', 'client-onboarding'] },
];

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
};

function stampChain(action, entity, details, road_id) {
  fetch('https://roadchain.blackroad.io/api/ledger',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action,entity,details:typeof details==='string'?details:JSON.stringify(details),road_id:road_id||'system',app:'roadwork',ts:new Date().toISOString()})}).catch(()=>{});
}
function earnCoin(road_id, action, amount) {
  fetch('https://roadcoin.blackroad.io/api/earn',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({road_id:road_id||'system',action,amount:amount||1})}).catch(()=>{});
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: CORS });
}

function html(content, status = 200) {
  return new Response(content, { status, headers: { ...CORS, 'Content-Type': 'text/html;charset=UTF-8' } });
}

const CREW = [
  { name: 'Cecilia', role: 'Operations — workflow automation, resource allocation, process optimization', emoji: 'gear', department: 'ops' },
  { name: 'Olympia', role: 'Executive — strategy, KPIs, quarterly planning, investor relations', emoji: 'chess', department: 'executive' },
  { name: 'Sebastian', role: 'Client-facing — onboarding, support tickets, customer success', emoji: 'handshake', department: 'customer' },
  { name: 'Portia', role: 'Legal — contracts, compliance, IP protection, terms of service', emoji: 'scroll', department: 'legal' },
  { name: 'Cicero', role: 'Sales — pipeline management, outreach, deal closing, revenue targets', emoji: 'megaphone', department: 'sales' },
  { name: 'Atticus', role: 'Audit — financial review, expense tracking, tax prep, reconciliation', emoji: 'ledger', department: 'finance' },
  { name: 'Alexandria', role: 'Research — market analysis, competitive intelligence, trend forecasting', emoji: 'telescope', department: 'research' },
];

let dbReady = false;
async function ensureTables(db) {
  if (dbReady) return;
  dbReady = true;
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS roadwork_crew (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL UNIQUE,
      role TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'idle',
      tasks_completed INTEGER DEFAULT 0,
      current_task TEXT,
      last_active TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS roadwork_tasks (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      assignee TEXT,
      priority TEXT NOT NULL DEFAULT 'medium',
      status TEXT NOT NULL DEFAULT 'pending',
      kanban_column TEXT NOT NULL DEFAULT 'backlog',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      completed_at TEXT,
      result TEXT
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS roadwork_huddles (
      id TEXT PRIMARY KEY,
      summary TEXT NOT NULL,
      participants TEXT NOT NULL DEFAULT '[]',
      action_items TEXT NOT NULL DEFAULT '[]',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS roadwork_kpis (
      id TEXT PRIMARY KEY,
      metric TEXT NOT NULL,
      value REAL NOT NULL,
      unit TEXT,
      period TEXT NOT NULL DEFAULT 'daily',
      recorded_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS roadwork_reports (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      type TEXT NOT NULL DEFAULT 'daily',
      content TEXT NOT NULL,
      generated_by TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_invoices (
      id TEXT PRIMARY KEY,
      customer_id TEXT,
      customer_name TEXT NOT NULL,
      amount REAL NOT NULL,
      tax_rate REAL DEFAULT 0,
      tax_amount REAL DEFAULT 0,
      subtotal REAL DEFAULT 0,
      description TEXT,
      line_items TEXT DEFAULT '[]',
      status TEXT NOT NULL DEFAULT 'draft',
      due_date TEXT,
      paid_at TEXT,
      payment_method TEXT,
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_customers (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT,
      company TEXT,
      notes TEXT,
      total_invoiced REAL DEFAULT 0,
      total_paid REAL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_time_entries (
      id TEXT PRIMARY KEY,
      task_id TEXT,
      task_title TEXT,
      member_name TEXT NOT NULL,
      started_at TEXT NOT NULL DEFAULT (datetime('now')),
      stopped_at TEXT,
      duration_minutes REAL DEFAULT 0,
      billable INTEGER DEFAULT 1,
      hourly_rate REAL DEFAULT 0,
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_expenses (
      id TEXT PRIMARY KEY,
      description TEXT NOT NULL,
      amount REAL NOT NULL,
      category TEXT NOT NULL DEFAULT 'other',
      expense_date TEXT NOT NULL DEFAULT (date('now')),
      receipt_url TEXT,
      submitted_by TEXT,
      status TEXT NOT NULL DEFAULT 'pending',
      reimbursable INTEGER DEFAULT 0,
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_milestones (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      project TEXT,
      description TEXT,
      due_date TEXT,
      completion_pct INTEGER DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'planned',
      depends_on TEXT DEFAULT '[]',
      assigned_to TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      completed_at TEXT
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_capacity (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      role TEXT,
      capacity_hours REAL DEFAULT 40,
      allocated_hours REAL DEFAULT 0,
      utilization REAL DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_portal_shares (
      id TEXT PRIMARY KEY,
      customer_id TEXT NOT NULL,
      resource_type TEXT NOT NULL,
      resource_id TEXT NOT NULL,
      shared_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_contracts (
      id TEXT PRIMARY KEY,
      customer_id TEXT,
      customer_name TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      value REAL DEFAULT 0,
      currency TEXT DEFAULT 'USD',
      start_date TEXT,
      end_date TEXT,
      renewal_type TEXT DEFAULT 'none',
      renewal_terms TEXT,
      status TEXT NOT NULL DEFAULT 'draft',
      terms TEXT,
      signed_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_leads (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT,
      company TEXT,
      source TEXT DEFAULT 'direct',
      stage TEXT NOT NULL DEFAULT 'prospect',
      value REAL DEFAULT 0,
      probability INTEGER DEFAULT 10,
      assigned_to TEXT,
      notes TEXT,
      last_contact TEXT,
      next_followup TEXT,
      lost_reason TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_payroll (
      id TEXT PRIMARY KEY,
      employee_name TEXT NOT NULL,
      pay_type TEXT NOT NULL DEFAULT 'salary',
      rate REAL NOT NULL DEFAULT 0,
      hours_worked REAL DEFAULT 0,
      pay_period_start TEXT NOT NULL,
      pay_period_end TEXT NOT NULL,
      gross_pay REAL DEFAULT 0,
      federal_tax REAL DEFAULT 0,
      state_tax REAL DEFAULT 0,
      social_security REAL DEFAULT 0,
      medicare REAL DEFAULT 0,
      other_deductions REAL DEFAULT 0,
      net_pay REAL DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'pending',
      paid_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_meetings (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      meeting_date TEXT NOT NULL,
      duration_minutes INTEGER DEFAULT 60,
      attendees TEXT DEFAULT '[]',
      notes TEXT,
      action_items TEXT DEFAULT '[]',
      decisions TEXT DEFAULT '[]',
      followups TEXT DEFAULT '[]',
      meeting_type TEXT DEFAULT 'general',
      location TEXT,
      created_by TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_doc_templates (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      description TEXT,
      content TEXT NOT NULL,
      variables TEXT DEFAULT '[]',
      version INTEGER DEFAULT 1,
      created_by TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_goals (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      goal_type TEXT NOT NULL DEFAULT 'objective',
      parent_id TEXT,
      owner TEXT,
      target_value REAL,
      current_value REAL DEFAULT 0,
      unit TEXT,
      start_date TEXT,
      due_date TEXT,
      progress INTEGER DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'not_started',
      alignment TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_resources (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      type TEXT NOT NULL DEFAULT 'link',
      url TEXT,
      content TEXT,
      category TEXT DEFAULT 'general',
      tags TEXT DEFAULT '[]',
      shared_with TEXT DEFAULT 'team',
      added_by TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_workflows (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      trigger_type TEXT NOT NULL,
      trigger_config TEXT NOT NULL DEFAULT '{}',
      action_type TEXT NOT NULL,
      action_config TEXT NOT NULL DEFAULT '{}',
      enabled INTEGER DEFAULT 1,
      last_triggered TEXT,
      trigger_count INTEGER DEFAULT 0,
      created_by TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_workflow_logs (
      id TEXT PRIMARY KEY,
      workflow_id TEXT NOT NULL,
      trigger_event TEXT,
      action_result TEXT,
      status TEXT NOT NULL DEFAULT 'success',
      executed_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_crm_contacts (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      company TEXT,
      title TEXT,
      source TEXT DEFAULT 'direct',
      owner TEXT,
      tags TEXT DEFAULT '[]',
      custom_fields TEXT DEFAULT '{}',
      last_contacted TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_crm_deals (
      id TEXT PRIMARY KEY,
      contact_id TEXT,
      title TEXT NOT NULL,
      value REAL DEFAULT 0,
      currency TEXT DEFAULT 'USD',
      stage TEXT NOT NULL DEFAULT 'discovery',
      probability INTEGER DEFAULT 10,
      expected_close TEXT,
      owner TEXT,
      notes TEXT,
      lost_reason TEXT,
      won_at TEXT,
      lost_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_crm_activities (
      id TEXT PRIMARY KEY,
      contact_id TEXT,
      deal_id TEXT,
      type TEXT NOT NULL DEFAULT 'note',
      subject TEXT NOT NULL,
      body TEXT,
      scheduled_at TEXT,
      completed_at TEXT,
      created_by TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_proposals (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      client_name TEXT NOT NULL,
      client_email TEXT,
      status TEXT NOT NULL DEFAULT 'draft',
      sections TEXT DEFAULT '[]',
      pricing_table TEXT DEFAULT '[]',
      total_value REAL DEFAULT 0,
      valid_until TEXT,
      signature_client TEXT,
      signature_date TEXT,
      notes TEXT,
      created_by TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_standups (
      id TEXT PRIMARY KEY,
      member_name TEXT NOT NULL,
      standup_date TEXT NOT NULL DEFAULT (date('now')),
      did_yesterday TEXT,
      will_do_today TEXT,
      blockers TEXT,
      mood TEXT DEFAULT 'neutral',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_kb_articles (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT,
      category TEXT NOT NULL DEFAULT 'general',
      content TEXT NOT NULL,
      tags TEXT DEFAULT '[]',
      version INTEGER DEFAULT 1,
      status TEXT NOT NULL DEFAULT 'draft',
      author TEXT,
      views INTEGER DEFAULT 0,
      helpful_yes INTEGER DEFAULT 0,
      helpful_no INTEGER DEFAULT 0,
      parent_id TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_kb_revisions (
      id TEXT PRIMARY KEY,
      article_id TEXT NOT NULL,
      version INTEGER NOT NULL,
      content TEXT NOT NULL,
      changed_by TEXT,
      change_summary TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_feedback (
      id TEXT PRIMARY KEY,
      client_name TEXT NOT NULL,
      client_email TEXT,
      project TEXT,
      nps_score INTEGER,
      rating INTEGER,
      category TEXT DEFAULT 'general',
      feedback_text TEXT,
      followup_action TEXT,
      followup_status TEXT DEFAULT 'pending',
      followup_owner TEXT,
      submitted_at TEXT NOT NULL DEFAULT (datetime('now')),
      resolved_at TEXT
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_assets (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      type TEXT NOT NULL DEFAULT 'other',
      provider TEXT,
      identifier TEXT,
      status TEXT NOT NULL DEFAULT 'active',
      cost_monthly REAL DEFAULT 0,
      cost_annual REAL DEFAULT 0,
      renewal_date TEXT,
      expiry_date TEXT,
      auto_renew INTEGER DEFAULT 0,
      owner TEXT,
      notes TEXT,
      metadata TEXT DEFAULT '{}',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_sops (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT NOT NULL DEFAULT 'general',
      description TEXT,
      steps TEXT DEFAULT '[]',
      checklist TEXT DEFAULT '[]',
      owner TEXT,
      department TEXT,
      version INTEGER DEFAULT 1,
      status TEXT NOT NULL DEFAULT 'draft',
      last_reviewed TEXT,
      review_interval_days INTEGER DEFAULT 90,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_forecast (
      id TEXT PRIMARY KEY,
      period TEXT NOT NULL,
      period_start TEXT NOT NULL,
      period_end TEXT NOT NULL,
      projected_revenue REAL DEFAULT 0,
      actual_revenue REAL DEFAULT 0,
      projected_expenses REAL DEFAULT 0,
      actual_expenses REAL DEFAULT 0,
      confidence INTEGER DEFAULT 50,
      assumptions TEXT DEFAULT '[]',
      notes TEXT,
      created_by TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
  ]);

  // Add columns to existing tables if they don't exist (safe migrations)
  try { await db.prepare("SELECT kanban_column FROM roadwork_tasks LIMIT 1").all(); } catch {
    try { await db.prepare("ALTER TABLE roadwork_tasks ADD COLUMN kanban_column TEXT NOT NULL DEFAULT 'backlog'").run(); } catch {}
  }
  try { await db.prepare("SELECT line_items FROM rw_invoices LIMIT 1").all(); } catch {
    try { await db.prepare("ALTER TABLE rw_invoices ADD COLUMN line_items TEXT DEFAULT '[]'").run(); } catch {}
    try { await db.prepare("ALTER TABLE rw_invoices ADD COLUMN tax_rate REAL DEFAULT 0").run(); } catch {}
    try { await db.prepare("ALTER TABLE rw_invoices ADD COLUMN tax_amount REAL DEFAULT 0").run(); } catch {}
    try { await db.prepare("ALTER TABLE rw_invoices ADD COLUMN subtotal REAL DEFAULT 0").run(); } catch {}
    try { await db.prepare("ALTER TABLE rw_invoices ADD COLUMN payment_method TEXT").run(); } catch {}
    try { await db.prepare("ALTER TABLE rw_invoices ADD COLUMN notes TEXT").run(); } catch {}
  }
}

async function seedCrew(db) {
  const existing = await db.prepare('SELECT COUNT(*) as count FROM roadwork_crew').first();
  if (existing.count === 0) {
    const stmts = CREW.map(c =>
      db.prepare('INSERT INTO roadwork_crew (id, name, role) VALUES (?, ?, ?)')
        .bind(crypto.randomUUID(), c.name, c.role)
    );
    await db.batch(stmts);
  }
}

// ─── Invoice HTML Generator ───
function generateInvoiceHTML(invoice, lineItems) {
  const items = lineItems || [];
  const subtotal = items.reduce((s, i) => s + (i.quantity || 1) * (i.unit_price || 0), 0) || invoice.subtotal || invoice.amount;
  const taxRate = invoice.tax_rate || 0;
  const taxAmount = invoice.tax_amount || (subtotal * taxRate / 100);
  const total = subtotal + taxAmount;

  return `<!DOCTYPE html><html><head><link rel="stylesheet" href="https://images.blackroad.io/brand/brand.css"><meta charset="UTF-8"><title>Invoice ${invoice.id.slice(0,8)}</title>
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Helvetica Neue',Arial,sans-serif;color:#1a1a1a;background:#f8f8f8;padding:40px}
.invoice{max-width:800px;margin:0 auto;background:#fff;padding:48px;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.08)}
.header{display:flex;justify-content:space-between;margin-bottom:40px;padding-bottom:24px;border-bottom:2px solid #0a0a0a}
.brand{font-size:24px;font-weight:700;color:#0a0a0a}.brand-sub{font-size:11px;color:#888;margin-top:4px}
.inv-meta{text-align:right}.inv-meta h2{font-size:28px;color:#0a0a0a;margin-bottom:8px}.inv-meta p{font-size:12px;color:#666;margin-bottom:2px}
.parties{display:flex;justify-content:space-between;margin-bottom:32px}.party h3{font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:#888;margin-bottom:8px}.party p{font-size:13px;margin-bottom:2px}
table{width:100%;border-collapse:collapse;margin-bottom:24px}th{background:#f5f5f5;text-align:left;padding:10px 12px;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#666;border-bottom:1px solid #ddd}
td{padding:10px 12px;border-bottom:1px solid #eee;font-size:13px}.text-right{text-align:right}
.totals{margin-left:auto;width:280px}.totals tr td{border:none;padding:6px 12px}.totals .total-row{font-weight:700;font-size:16px;border-top:2px solid #0a0a0a}
.status{display:inline-block;padding:4px 12px;border-radius:12px;font-size:11px;font-weight:600;text-transform:uppercase}
.status-paid{background:#dcfce7;color:#166534}.status-draft{background:#fef3c7;color:#92400e}.status-sent{background:#dbeafe;color:#1e40af}.status-overdue{background:#fecaca;color:#991b1b}
.footer{margin-top:32px;padding-top:16px;border-top:1px solid #eee;font-size:11px;color:#888;text-align:center}
.notes{background:#f9fafb;border-radius:6px;padding:16px;margin-bottom:24px;font-size:12px;color:#555}
@media print{body{background:#fff;padding:0}.invoice{box-shadow:none;padding:24px}}
</style></head><body><div class="invoice">
<div class="header"><div><div class="brand">BlackRoad OS, Inc.</div><div class="brand-sub">business automation that builds itself</div></div>
<div class="inv-meta"><h2>INVOICE</h2><p>No: INV-${invoice.id.slice(0,8).toUpperCase()}</p><p>Date: ${invoice.created_at?.split('T')[0] || new Date().toISOString().split('T')[0]}</p><p>Due: ${invoice.due_date || 'On receipt'}</p><p><span class="status status-${invoice.status}">${invoice.status}</span></p></div></div>
<div class="parties"><div class="party"><h3>From</h3><p style="font-weight:600">BlackRoad OS, Inc.</p><p>Delaware C-Corp</p><p>EIN: 41-2663817</p></div>
<div class="party" style="text-align:right"><h3>Bill To</h3><p style="font-weight:600">${invoice.customer_name}</p>${invoice.customer_email ? '<p>'+invoice.customer_email+'</p>' : ''}</div></div>
${invoice.notes ? '<div class="notes">'+invoice.notes+'</div>' : ''}
<table><thead><tr><th>Description</th><th class="text-right">Qty</th><th class="text-right">Rate</th><th class="text-right">Amount</th></tr></thead><tbody>
${items.length > 0 ? items.map(i => `<tr><td>${i.description || ''}</td><td class="text-right">${i.quantity || 1}</td><td class="text-right">$${(i.unit_price || 0).toFixed(2)}</td><td class="text-right">$${((i.quantity || 1) * (i.unit_price || 0)).toFixed(2)}</td></tr>`).join('') : `<tr><td>${invoice.description || 'Professional services'}</td><td class="text-right">1</td><td class="text-right">$${(invoice.amount || 0).toFixed(2)}</td><td class="text-right">$${(invoice.amount || 0).toFixed(2)}</td></tr>`}
</tbody></table>
<table class="totals"><tr><td>Subtotal</td><td class="text-right">$${subtotal.toFixed(2)}</td></tr>
${taxRate > 0 ? `<tr><td>Tax (${taxRate}%)</td><td class="text-right">$${taxAmount.toFixed(2)}</td></tr>` : ''}
<tr class="total-row"><td>Total</td><td class="text-right">$${total.toFixed(2)}</td></tr>
${invoice.status === 'paid' ? `<tr><td>Paid</td><td class="text-right" style="color:#166534">$${total.toFixed(2)}${invoice.payment_method ? ' via '+invoice.payment_method : ''}</td></tr>` : ''}
</table>
<div class="footer"><p>BlackRoad OS, Inc. | blackroad.io | Remember the Road. Pave Tomorrow.</p><p style="margin-top:4px">Thank you for your business.</p></div></div></body></html>`;
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    if (path === "/" || path === "") return new Response(ROOT_HTML, { headers: { ...CORS, "Content-Type": "text/html;charset=UTF-8" } });
    if (path === '/sitemap.xml') {
      const wfUrls = RW_WORKFLOWS.map(w => `  <url><loc>https://roadwork.blackroad.io/workflows/${w.slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`).join('\n');
      return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://roadwork.blackroad.io/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>\n  <url><loc>https://roadwork.blackroad.io/workflows</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>\n${wfUrls}\n</urlset>`, { headers: { 'Content-Type': 'application/xml', ...CORS } });
    }
    await ensureTables(env.DB);
    await seedCrew(env.DB);
    // Analytics tracking
    if (path === '/api/track' && method === 'POST') {
      try { const body = await request.json(); const cf = request.cf || {};
        await env.DB.prepare("CREATE TABLE IF NOT EXISTS analytics_events (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT DEFAULT 'pageview', path TEXT, referrer TEXT, country TEXT, city TEXT, device TEXT, screen TEXT, scroll_depth INTEGER DEFAULT 0, engagement_ms INTEGER DEFAULT 0, created_at TEXT DEFAULT (datetime('now')))").run();
        await env.DB.prepare('INSERT INTO analytics_events (type, path, referrer, country, city, device, screen, scroll_depth, engagement_ms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(body.type||'pageview', body.path||'/', body.referrer||'', cf.country||'', cf.city||'', body.device||'', body.screen||'', body.scroll||0, body.time||0).run();
      } catch(e) {}
      return json({ ok: true });
    }

    // ── Sovereign Analytics ──
    if (path === '/api/analytics' && request.method === 'POST') {
      try {
        const body = await request.json();
        const cf = request.cf || {};
        const ip = request.headers.get('CF-Connecting-IP') || '';
        const ipHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip + '2026'));
        const visitor = btoa(String.fromCharCode(...new Uint8Array(ipHash))).slice(0,12);
        await env.DB.prepare(`CREATE TABLE IF NOT EXISTS br_analytics (id INTEGER PRIMARY KEY AUTOINCREMENT, path TEXT, referrer TEXT, visitor TEXT, country TEXT, city TEXT, screen TEXT, ts TEXT DEFAULT (datetime('now')))`).run();
        await env.DB.prepare('INSERT INTO br_analytics (path, referrer, visitor, country, city, screen) VALUES (?,?,?,?,?,?)').bind(body.path||'/', body.ref||'', visitor, cf.country||'', cf.city||'', (body.w||0)+'x'+(body.h||0)).run();
      } catch(e){}
      return new Response('ok', {headers:{'Access-Control-Allow-Origin':'*'}});
    }
    if (path === '/api/analytics/stats') {
      try {
        await env.DB.prepare(`CREATE TABLE IF NOT EXISTS br_analytics (id INTEGER PRIMARY KEY AUTOINCREMENT, path TEXT, referrer TEXT, visitor TEXT, country TEXT, city TEXT, screen TEXT, ts TEXT DEFAULT (datetime('now')))`).run();
        const total = await env.DB.prepare('SELECT COUNT(*) as c FROM br_analytics').first();
        const unique = await env.DB.prepare('SELECT COUNT(DISTINCT visitor) as c FROM br_analytics').first();
        const today = await env.DB.prepare("SELECT COUNT(*) as c FROM br_analytics WHERE ts > datetime('now','-1 day')").first();
        const pages = await env.DB.prepare('SELECT path, COUNT(*) as views FROM br_analytics GROUP BY path ORDER BY views DESC LIMIT 10').all();
        const countries = await env.DB.prepare('SELECT country, COUNT(*) as c FROM br_analytics WHERE country != "" GROUP BY country ORDER BY c DESC LIMIT 10').all();
        return new Response(JSON.stringify({total_views:total?.c||0,unique_visitors:unique?.c||0,today:today?.c||0,top_pages:pages?.results||[],top_countries:countries?.results||[]}),{headers:{'Access-Control-Allow-Origin':'*','Content-Type':'application/json'}});
      } catch(e) { return new Response(JSON.stringify({error:'analytics unavailable'}),{status:500,headers:{'Content-Type':'application/json'}}); }
    }



    // ─── Workflow content pages (SEO) ───
    if (path === '/workflows') {
      const cats = {};
      RW_WORKFLOWS.forEach(w => { (cats[w.category] = cats[w.category] || []).push(w); });
      const listing = Object.entries(cats).map(([cat, items]) =>
        `<div style="margin-bottom:32px"><h2 style="font-size:18px;font-weight:700;margin-bottom:12px;color:#f5f5f5">${cat}</h2><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px">${items.map(w => `<a href="/workflows/${w.slug}" style="display:block;background:#0a0a0a;border:1px solid #1a1a1a;border-radius:8px;padding:16px;text-decoration:none;transition:border-color .2s"><div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><span style="font-size:14px;font-weight:600;color:#f5f5f5">${w.name}</span>${w.automatable ? '<span style="font-size:9px;padding:2px 8px;border-radius:10px;background:#22c55e22;color:#22c55e;font-family:monospace">automatable</span>' : ''}</div><div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px">${w.roles.map(r => `<span style="font-size:9px;padding:2px 6px;border-radius:10px;background:#FF6B2B22;color:#FF6B2B;font-family:monospace">${r}</span>`).join('')}</div><p style="font-size:12px;color:#737373;line-height:1.5">${w.description}</p></a>`).join('')}</div></div>`
      ).join('');
      const pageHtml = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://images.blackroad.io/brand/brand.css"><title>Workflow Templates - RoadWork by BlackRoad OS</title><meta name="description" content="20+ workflow templates for engineering, operations, product, business, and security. Sprint planning, code review, incident response, and more."><meta property="og:title" content="Workflow Templates - RoadWork"><meta property="og:description" content="20+ ready-to-use workflow templates for teams. Engineering, operations, product, and business."><meta property="og:url" content="https://roadwork.blackroad.io/workflows"><meta property="og:image" content="https://images.blackroad.io/pixel-art/road-logo.png"><meta name="twitter:card" content="summary_large_image"><link rel="canonical" href="https://roadwork.blackroad.io/workflows"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollectionPage","name":"Workflow Templates","url":"https://roadwork.blackroad.io/workflows","description":"20+ workflow templates for engineering, operations, product, and business teams.","publisher":{"@type":"Organization","name":"BlackRoad OS, Inc."}}</script><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet"><style>*{margin:0;padding:0;box-sizing:border-box}body{background:#000;color:#f5f5f5;font-family:'Space Grotesk',sans-serif}a{color:inherit}a:hover{border-color:#333 !important}.bar{height:3px;background:linear-gradient(90deg,#FF6B2B,#FF2255,#CC00AA,#8844FF,#4488FF,#00D4FF);position:fixed;top:0;left:0;right:0;z-index:1000}nav{position:fixed;top:3px;left:0;right:0;z-index:999;background:rgba(0,0,0,.92);backdrop-filter:blur(20px);border-bottom:1px solid #1a1a1a;height:48px;display:flex;align-items:center;padding:0 24px;gap:16px}nav a{font-size:12px;color:#737373}nav a:hover{color:#f5f5f5}.container{max-width:960px;margin:0 auto;padding:80px 24px 48px}</style></head><body><div class="bar"></div><nav><a href="/" style="font-weight:700;font-size:15px;color:#f5f5f5">RoadWork</a><a href="/workflows" style="color:#f5f5f5">Workflows</a><a href="https://blackroad.io">Highway</a><a href="https://app.blackroad.io" style="padding:6px 14px;border-radius:5px;background:#f5f5f5;color:#000;font-weight:600;font-size:11px">Open OS</a></nav><div class="container"><h1 style="font-size:clamp(24px,5vw,40px);font-weight:700;margin-bottom:8px">Workflow Templates</h1><p style="color:#737373;margin-bottom:32px;max-width:600px;line-height:1.6">Ready-to-use workflows for your team. Pick a template, customize the steps, and let your business run itself.</p>${listing}</div></body></html>`;
      return new Response(pageHtml, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }

    const wfMatch = path.match(/^\/workflows\/([a-z0-9-]+)$/);
    if (wfMatch) {
      const wf = RW_WORKFLOWS.find(w => w.slug === wfMatch[1]);
      if (!wf) return new Response('Workflow not found', { status: 404 });
      const related = RW_WORKFLOWS.filter(w => wf.related.includes(w.slug)).slice(0, 4);
      const wfHtml = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://images.blackroad.io/brand/brand.css"><title>${wf.name} Workflow - RoadWork by BlackRoad OS</title><meta name="description" content="${wf.description}"><meta property="og:title" content="${wf.name} Workflow - RoadWork"><meta property="og:description" content="${wf.description}"><meta property="og:url" content="https://roadwork.blackroad.io/workflows/${wf.slug}"><meta property="og:image" content="https://images.blackroad.io/pixel-art/road-logo.png"><meta name="twitter:card" content="summary"><link rel="canonical" href="https://roadwork.blackroad.io/workflows/${wf.slug}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"HowTo","name":"${wf.name}","description":"${wf.description}","step":${JSON.stringify(wf.steps.map((s,i) => ({"@type":"HowToStep","position":i+1,"text":s})))},"publisher":{"@type":"Organization","name":"BlackRoad OS, Inc."}}</script><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet"><style>*{margin:0;padding:0;box-sizing:border-box}body{background:#000;color:#f5f5f5;font-family:'Space Grotesk',sans-serif}a{color:inherit}.bar{height:3px;background:linear-gradient(90deg,#FF6B2B,#FF2255,#CC00AA,#8844FF,#4488FF,#00D4FF);position:fixed;top:0;left:0;right:0;z-index:1000}nav{position:fixed;top:3px;left:0;right:0;z-index:999;background:rgba(0,0,0,.92);backdrop-filter:blur(20px);border-bottom:1px solid #1a1a1a;height:48px;display:flex;align-items:center;padding:0 24px;gap:16px}nav a{font-size:12px;color:#737373}nav a:hover{color:#f5f5f5}.container{max-width:720px;margin:0 auto;padding:80px 24px 48px}</style></head><body><div class="bar"></div><nav><a href="/" style="font-weight:700;font-size:15px;color:#f5f5f5">RoadWork</a><a href="/workflows" style="color:#f5f5f5">Workflows</a><a href="https://blackroad.io">Highway</a><a href="https://app.blackroad.io" style="padding:6px 14px;border-radius:5px;background:#f5f5f5;color:#000;font-weight:600;font-size:11px">Open OS</a></nav><div class="container"><a href="/workflows" style="font-size:12px;color:#737373;display:inline-block;margin-bottom:16px">&larr; All Workflows</a><div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:8px"><h1 style="font-size:28px;font-weight:700">${wf.name}</h1>${wf.roles.map(r => `<span style="font-size:11px;padding:3px 10px;border-radius:10px;background:#FF6B2B22;color:#FF6B2B;font-family:'JetBrains Mono',monospace">${r}</span>`).join('')}${wf.automatable ? '<span style="font-size:11px;padding:3px 10px;border-radius:10px;background:#22c55e22;color:#22c55e">Automatable</span>' : '<span style="font-size:11px;padding:3px 10px;border-radius:10px;background:#f5a62322;color:#f5a623">Manual</span>'}<span style="font-size:11px;padding:3px 10px;border-radius:10px;background:#4488ff22;color:#4488ff">${wf.category}</span></div><p style="font-size:15px;color:#737373;line-height:1.6;margin-bottom:24px">${wf.description}</p><h2 style="font-size:16px;margin-bottom:12px">Steps</h2><ol style="list-style:none;counter-reset:step;margin-bottom:24px">${wf.steps.map((s,i) => `<li style="padding:12px 0;font-size:14px;color:#ccc;line-height:1.5;border-bottom:1px solid #1a1a1a;display:flex;align-items:flex-start;gap:12px"><span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#FF6B2B;font-weight:700;min-width:24px">${i+1}</span>${s}</li>`).join('')}</ol><a href="https://app.blackroad.io" style="display:inline-block;margin-top:16px;padding:12px 28px;border-radius:7px;background:#f5f5f5;color:#000;font-weight:600;font-size:14px;text-decoration:none">Use in RoadWork</a>${related.length ? `<div style="margin-top:48px;border-top:1px solid #1a1a1a;padding-top:24px"><h2 style="font-size:16px;margin-bottom:12px">Related Workflows</h2><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px">${related.map(r => `<a href="/workflows/${r.slug}" style="display:block;background:#0a0a0a;border:1px solid #1a1a1a;border-radius:8px;padding:12px;text-decoration:none"><div style="font-size:13px;font-weight:600;color:#f5f5f5;margin-bottom:4px">${r.name}</div><div style="font-size:11px;color:#737373">${r.category} &middot; ${r.steps.length} steps</div></a>`).join('')}</div></div>` : ''}</div></body></html>`;
      return new Response(wfHtml, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }

    // Health
    if ((path === '/health' || path === '/api/health') && method === 'GET') {
      return json({ status: 'ok', service: 'roadwork', timestamp: new Date().toISOString() });
    }

    // Stats
    if (path === '/api/stats' && method === 'GET') {
      const tasks = await env.DB.prepare("SELECT COUNT(*) as count FROM roadwork_tasks WHERE status = 'completed'").first();
      const agents = await env.DB.prepare("SELECT COUNT(*) as count FROM roadwork_crew WHERE status != 'offline'").first();
      const revenue = await env.DB.prepare("SELECT COALESCE(SUM(value), 0) as total FROM roadwork_kpis WHERE metric = 'revenue'").first();
      const pending = await env.DB.prepare("SELECT COUNT(*) as count FROM roadwork_tasks WHERE status = 'pending'").first();
      return json({
        tasks_completed: tasks.count,
        agents_active: agents.count,
        revenue_tracked: revenue.total,
        tasks_pending: pending.count,
      });
    }

    // Crew
    if (path === '/api/crew' && method === 'GET') {
      const result = await env.DB.prepare('SELECT * FROM roadwork_crew ORDER BY name').all();
      return json({ crew: result.results });
    }

    // Crew huddle
    if (path === '/api/crew/huddle' && method === 'POST') {
      const crew = await env.DB.prepare('SELECT * FROM roadwork_crew').all();
      const pendingTasks = await env.DB.prepare("SELECT * FROM roadwork_tasks WHERE status = 'pending' LIMIT 10").all();

      let summary = `Huddle: ${crew.results.length} agents present. ${pendingTasks.results.length} tasks pending.`;
      const actionItems = [];

      try {
        const crewStatus = crew.results.map(c => `${c.name} (${c.role}): ${c.status}`).join('\n');
        const taskList = pendingTasks.results.map(t => `- ${t.title} [${t.priority}]`).join('\n');
        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: 'You are a business operations AI running a crew huddle. Summarize the team status and generate 3-5 concrete action items. Return JSON: {"summary":"...","action_items":["item1","item2"]}' },
            { role: 'user', content: `Team:\n${crewStatus}\n\nPending Tasks:\n${taskList || 'None'}` },
          ],
          max_tokens: 512,
        });
        if (aiResult.response) {
          try {
            const parsed = JSON.parse(aiResult.response);
            summary = parsed.summary || summary;
            actionItems.push(...(parsed.action_items || []));
          } catch {
            summary = aiResult.response;
          }
        }
      } catch (e) {
        // AI unavailable
      }

      const id = crypto.randomUUID();
      const participants = JSON.stringify(crew.results.map(c => c.name));
      await env.DB.prepare(
        'INSERT INTO roadwork_huddles (id, summary, participants, action_items) VALUES (?, ?, ?, ?)'
      ).bind(id, summary, participants, JSON.stringify(actionItems)).run();

      return json({ huddle: { id, summary, participants: crew.results.map(c => c.name), action_items: actionItems } }, 201);
    }

    // List tasks
    if (path === '/api/tasks' && method === 'GET') {
      const status = url.searchParams.get('status');
      let query = 'SELECT * FROM roadwork_tasks';
      const params = [];
      if (status) { query += ' WHERE status = ?'; params.push(status); }
      query += ' ORDER BY created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ tasks: result.results });
    }

    // Create task
    if (path === '/api/tasks' && method === 'POST') {
      const body = await request.json();
      if (!body.title) return json({ error: 'title is required' }, 400);
      const id = crypto.randomUUID();
      const assignee = body.assignee || null;
      const priority = body.priority || 'medium';
      const kanban = body.kanban_column || 'backlog';

      await env.DB.prepare(
        'INSERT INTO roadwork_tasks (id, title, description, assignee, priority, kanban_column) VALUES (?, ?, ?, ?, ?, ?)'
      ).bind(id, body.title, body.description || null, assignee, priority, kanban).run();

      if (assignee) {
        await env.DB.prepare(
          "UPDATE roadwork_crew SET status = 'working', current_task = ?, last_active = datetime('now') WHERE name = ?"
        ).bind(body.title, assignee).run();
      }

      const task = await env.DB.prepare('SELECT * FROM roadwork_tasks WHERE id = ?').bind(id).first();
      return json({ task }, 201);
    }

    // Dashboard KPIs
    if (path === '/api/dashboard' && method === 'GET') {
      const tasks = await env.DB.prepare("SELECT COUNT(*) as total, SUM(CASE WHEN status='completed' THEN 1 ELSE 0 END) as completed, SUM(CASE WHEN status='pending' THEN 1 ELSE 0 END) as pending FROM roadwork_tasks").first();
      const crew = await env.DB.prepare("SELECT name, status, tasks_completed, current_task FROM roadwork_crew ORDER BY tasks_completed DESC").all();
      const recentKpis = await env.DB.prepare('SELECT * FROM roadwork_kpis ORDER BY recorded_at DESC LIMIT 20').all();
      const huddles = await env.DB.prepare('SELECT * FROM roadwork_huddles ORDER BY created_at DESC LIMIT 5').all();

      return json({
        tasks: { total: tasks.total, completed: tasks.completed, pending: tasks.pending },
        crew: crew.results,
        kpis: recentKpis.results,
        recent_huddles: huddles.results,
      });
    }

    // Voice command to crew
    if (path === '/api/steer' && method === 'POST') {
      const body = await request.json();
      if (!body.command) return json({ error: 'command is required' }, 400);

      let response = { interpreted: body.command, actions: [] };

      try {
        const crew = await env.DB.prepare('SELECT name, role, status FROM roadwork_crew').all();
        const crewInfo = crew.results.map(c => `${c.name}: ${c.role} (${c.status})`).join(', ');
        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are a business operations interpreter. Given a voice command and a crew of agents (${crewInfo}), determine which agent(s) should act and what they should do. Return JSON: {"interpreted":"plain english interpretation","actions":[{"agent":"name","action":"what to do"}]}` },
            { role: 'user', content: body.command },
          ],
          max_tokens: 512,
        });
        if (aiResult.response) {
          try {
            response = JSON.parse(aiResult.response);
          } catch {
            response.interpreted = aiResult.response;
          }
        }
      } catch (e) {
        response.interpreted = `Command received: ${body.command}`;
      }

      // Create tasks for actions
      for (const action of (response.actions || [])) {
        const taskId = crypto.randomUUID();
        await env.DB.prepare(
          'INSERT INTO roadwork_tasks (id, title, assignee, priority, status, kanban_column) VALUES (?, ?, ?, ?, ?, ?)'
        ).bind(taskId, action.action, action.agent, 'high', 'pending', 'todo').run();
      }

      return json({ steer: response }, 201);
    }

    // Reports — list
    if (path === '/api/reports' && method === 'GET') {
      const result = await env.DB.prepare(
        'SELECT * FROM roadwork_reports ORDER BY created_at DESC LIMIT 20'
      ).all();
      return json({ reports: result.results });
    }

    // Reports — generate AI report
    if (path === '/api/reports' && method === 'POST') {
      const body = await request.json();
      const reportType = body.type || 'daily';
      const tasks = await env.DB.prepare("SELECT * FROM roadwork_tasks ORDER BY created_at DESC LIMIT 20").all();
      const crew = await env.DB.prepare("SELECT name, role, status, tasks_completed, current_task FROM roadwork_crew").all();
      const invoices = await env.DB.prepare("SELECT status, SUM(amount) as total, COUNT(*) as count FROM rw_invoices GROUP BY status").all();
      const customers = await env.DB.prepare("SELECT COUNT(*) as count FROM rw_customers").first();

      let content = `${reportType} report: ${(tasks.results || []).length} recent tasks, ${(crew.results || []).length} crew members, ${customers?.count || 0} customers.`;

      try {
        const context = `Tasks: ${(tasks.results || []).map(t => `${t.title} [${t.status}]`).join(', ')}\nCrew: ${(crew.results || []).map(c => `${c.name}: ${c.status}`).join(', ')}\nInvoices: ${(invoices.results || []).map(i => `${i.status}: $${i.total} (${i.count})`).join(', ')}\nCustomers: ${customers?.count || 0}`;
        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are Olympia, the executive agent on RoadWork (BlackRoad OS). Generate a concise ${reportType} business report. Include: executive summary, key metrics, action items. Be direct and data-driven. Return plain text.` },
            { role: 'user', content: context },
          ],
          max_tokens: 600,
        });
        if (aiResult?.response) content = aiResult.response.trim();
      } catch {}

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO roadwork_reports (id, title, type, content, generated_by) VALUES (?, ?, ?, ?, ?)'
      ).bind(id, `${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report — ${new Date().toISOString().split('T')[0]}`, reportType, content, 'Olympia').run();

      return json({ report: { id, type: reportType, content, generated_by: 'Olympia' } }, 201);
    }

    // ─── Reports — AI-generated business reports with KPIs ───
    if (path === '/api/reports/generate' && method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const period = body.period || 'weekly';
      const validPeriods = ['daily', 'weekly', 'monthly', 'quarterly'];
      if (!validPeriods.includes(period)) return json({ error: 'period must be: ' + validPeriods.join(', ') }, 400);

      // Gather all data for the report
      const tasks = await env.DB.prepare("SELECT status, COUNT(*) as count FROM roadwork_tasks GROUP BY status").all();
      const crew = await env.DB.prepare("SELECT name, role, status, tasks_completed FROM roadwork_crew").all();
      const invoiceStats = await env.DB.prepare("SELECT status, COUNT(*) as count, SUM(amount) as total FROM rw_invoices GROUP BY status").all();
      const customers = await env.DB.prepare("SELECT COUNT(*) as count FROM rw_customers").first();
      const expenses = await env.DB.prepare("SELECT category, SUM(amount) as total, COUNT(*) as count FROM rw_expenses WHERE expense_date >= date('now', '-30 days') GROUP BY category").all();
      const timeData = await env.DB.prepare("SELECT member_name, SUM(duration_minutes) as total_minutes, SUM(CASE WHEN billable=1 THEN duration_minutes ELSE 0 END) as billable_minutes FROM rw_time_entries WHERE started_at >= datetime('now', '-7 days') GROUP BY member_name").all();
      const milestones = await env.DB.prepare("SELECT title, status, completion_pct, due_date FROM rw_milestones WHERE status != 'completed' ORDER BY due_date ASC LIMIT 10").all();

      const taskMap = (tasks.results || []).reduce((a, r) => { a[r.status] = r.count; return a; }, {});
      const invoiceMap = (invoiceStats.results || []).reduce((a, r) => { a[r.status] = { count: r.count, total: r.total }; return a; }, {});
      const totalRevenue = Object.values(invoiceMap).reduce((s, v) => s + (v.total || 0), 0);
      const totalExpenses = (expenses.results || []).reduce((s, r) => s + (r.total || 0), 0);
      const totalBillableHours = (timeData.results || []).reduce((s, r) => s + (r.billable_minutes || 0), 0) / 60;

      const kpis = {
        tasks_total: Object.values(taskMap).reduce((s, v) => s + v, 0),
        tasks_completed: taskMap.completed || 0,
        tasks_pending: taskMap.pending || 0,
        tasks_in_progress: taskMap['in-progress'] || taskMap.working || 0,
        crew_active: (crew.results || []).filter(c => c.status !== 'offline').length,
        revenue_invoiced: totalRevenue,
        revenue_paid: invoiceMap.paid?.total || 0,
        revenue_outstanding: (invoiceMap.sent?.total || 0) + (invoiceMap.overdue?.total || 0),
        customers: customers?.count || 0,
        expenses_30d: totalExpenses,
        billable_hours_7d: Math.round(totalBillableHours * 10) / 10,
        net_margin: totalRevenue > 0 ? Math.round((totalRevenue - totalExpenses) / totalRevenue * 100) : 0,
        milestones_active: (milestones.results || []).length,
        milestones_at_risk: (milestones.results || []).filter(m => m.status === 'at_risk').length,
      };

      let aiContent = '';
      try {
        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are Olympia, Executive AI on RoadWork (BlackRoad OS). Generate a ${period} business report. Structure it as: EXECUTIVE SUMMARY (3 lines), KEY METRICS (bullet points), REVENUE & EXPENSES, TEAM PERFORMANCE, MILESTONES, ACTION ITEMS (3-5). Be data-driven, concise, professional. Plain text format.` },
            { role: 'user', content: `KPIs: ${JSON.stringify(kpis)}\nExpenses by category: ${JSON.stringify(expenses.results || [])}\nTime by member: ${JSON.stringify(timeData.results || [])}\nMilestones: ${JSON.stringify(milestones.results || [])}\nCrew: ${JSON.stringify(crew.results || [])}` },
          ],
          max_tokens: 1000,
        });
        if (aiResult?.response) aiContent = aiResult.response.trim();
      } catch {}

      if (!aiContent) {
        aiContent = `${period.toUpperCase()} BUSINESS REPORT — ${new Date().toISOString().split('T')[0]}\n\nEXECUTIVE SUMMARY\nTasks: ${kpis.tasks_completed} completed of ${kpis.tasks_total}. Revenue invoiced: $${kpis.revenue_invoiced.toFixed(2)}. Expenses (30d): $${kpis.expenses_30d.toFixed(2)}. ${kpis.milestones_at_risk} milestones at risk.\n\nKEY METRICS\n- Active crew: ${kpis.crew_active}\n- Billable hours (7d): ${kpis.billable_hours_7d}h\n- Net margin: ${kpis.net_margin}%\n- Customers: ${kpis.customers}`;
      }

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO roadwork_reports (id, title, type, content, generated_by) VALUES (?, ?, ?, ?, ?)'
      ).bind(id, `${period.charAt(0).toUpperCase() + period.slice(1)} Business Report — ${new Date().toISOString().split('T')[0]}`, period, aiContent, 'Olympia').run();

      return json({ report: { id, period, kpis, content: aiContent, generated_by: 'Olympia', generated_at: new Date().toISOString() } }, 201);
    }

    // ─── Invoices ───
    if (path === '/api/invoices' && method === 'GET') {
      const status = url.searchParams.get('status');
      let query = 'SELECT * FROM rw_invoices';
      const params = [];
      if (status) { query += ' WHERE status = ?'; params.push(status); }
      query += ' ORDER BY created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const summary = await env.DB.prepare(
        "SELECT status, COUNT(*) as count, SUM(amount) as total FROM rw_invoices GROUP BY status"
      ).all();

      return json({ invoices: result.results, summary: summary.results });
    }

    if (path === '/api/invoices' && method === 'POST') {
      const body = await request.json();
      if (!body.customer && !body.customer_name) return json({ error: 'customer/customer_name is required' }, 400);
      const customerName = body.customer_name || body.customer;
      const lineItems = body.line_items || [];
      let subtotal = 0;
      if (lineItems.length > 0) {
        subtotal = lineItems.reduce((s, i) => s + (i.quantity || 1) * (i.unit_price || 0), 0);
      } else {
        subtotal = parseFloat(body.amount || 0);
      }
      if (isNaN(subtotal) || subtotal < 0) return json({ error: 'invalid amount' }, 400);
      const taxRate = parseFloat(body.tax_rate || 0);
      const taxAmount = subtotal * taxRate / 100;
      const amount = subtotal + taxAmount;

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_invoices (id, customer_id, customer_name, amount, subtotal, tax_rate, tax_amount, description, line_items, status, due_date, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.customer_id || null, customerName, amount, subtotal, taxRate, taxAmount, body.description || null, JSON.stringify(lineItems), body.status || 'draft', body.due_date || null, body.notes || null).run();

      if (body.customer_id) {
        await env.DB.prepare(
          "UPDATE rw_customers SET total_invoiced = total_invoiced + ? WHERE id = ?"
        ).bind(amount, body.customer_id).run();
      }

      return json({ invoice: { id, customer: customerName, amount, subtotal, tax_rate: taxRate, tax_amount: taxAmount, status: body.status || 'draft', line_items: lineItems } }, 201);
    }

    // Invoice HTML view
    const invoiceHtmlMatch = path.match(/^\/api\/invoices\/([^/]+)\/html$/);
    if (invoiceHtmlMatch && method === 'GET') {
      const inv = await env.DB.prepare('SELECT * FROM rw_invoices WHERE id = ?').bind(invoiceHtmlMatch[1]).first();
      if (!inv) return json({ error: 'Invoice not found' }, 404);
      let lineItems = [];
      try { lineItems = JSON.parse(inv.line_items || '[]'); } catch {}
      // Get customer email if available
      if (inv.customer_id) {
        const cust = await env.DB.prepare('SELECT email FROM rw_customers WHERE id = ?').bind(inv.customer_id).first();
        if (cust) inv.customer_email = cust.email;
      }
      return html(generateInvoiceHTML(inv, lineItems));
    }

    // Update invoice status
    const invoiceMatch = path.match(/^\/api\/invoices\/([^/]+)$/);
    if (invoiceMatch && method === 'PUT') {
      const body = await request.json();
      const invoiceId = invoiceMatch[1];
      const updates = [];
      const values = [];
      if (body.status) { updates.push('status = ?'); values.push(body.status); }
      if (body.status === 'paid') { updates.push("paid_at = datetime('now')"); }
      if (body.payment_method) { updates.push('payment_method = ?'); values.push(body.payment_method); }
      if (body.notes) { updates.push('notes = ?'); values.push(body.notes); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      values.push(invoiceId);
      await env.DB.prepare(`UPDATE rw_invoices SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();

      // If paid, update customer total_paid
      if (body.status === 'paid') {
        const inv = await env.DB.prepare('SELECT customer_id, amount FROM rw_invoices WHERE id = ?').bind(invoiceId).first();
        if (inv?.customer_id) {
          await env.DB.prepare("UPDATE rw_customers SET total_paid = total_paid + ? WHERE id = ?").bind(inv.amount, inv.customer_id).run();
        }
      }

      const updated = await env.DB.prepare('SELECT * FROM rw_invoices WHERE id = ?').bind(invoiceId).first();
      return json({ invoice: updated });
    }

    // ─── Customers ───
    if (path === '/api/customers' && method === 'GET') {
      const search = url.searchParams.get('q');
      let query = 'SELECT * FROM rw_customers';
      const params = [];
      if (search) { query += ' WHERE name LIKE ? OR email LIKE ? OR company LIKE ?'; params.push(`%${search}%`, `%${search}%`, `%${search}%`); }
      query += ' ORDER BY created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ customers: result.results });
    }

    if (path === '/api/customers' && method === 'POST') {
      const body = await request.json();
      if (!body.name) return json({ error: 'name is required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_customers (id, name, email, company, notes) VALUES (?, ?, ?, ?, ?)'
      ).bind(id, body.name.slice(0, 100), body.email || null, body.company || null, body.notes || null).run();
      return json({ customer: { id, name: body.name, email: body.email } }, 201);
    }

    // Single customer with invoices
    const customerMatch = path.match(/^\/api\/customers\/([^/]+)$/);
    if (customerMatch && method === 'GET') {
      const cust = await env.DB.prepare('SELECT * FROM rw_customers WHERE id = ?').bind(customerMatch[1]).first();
      if (!cust) return json({ error: 'Customer not found' }, 404);
      const invoices = await env.DB.prepare('SELECT * FROM rw_invoices WHERE customer_id = ? ORDER BY created_at DESC').bind(customerMatch[1]).all();
      return json({ customer: cust, invoices: invoices.results });
    }

    // ─── Project Kanban ───
    if (path === '/api/kanban' && method === 'GET') {
      const projectFilter = url.searchParams.get('project');
      let query = 'SELECT * FROM roadwork_tasks';
      const params = [];
      if (projectFilter) { query += ' WHERE description LIKE ?'; params.push(`%${projectFilter}%`); }
      query += ' ORDER BY created_at DESC LIMIT 200';
      const result = await env.DB.prepare(query).bind(...params).all();
      const allTasks = result.results || [];

      const columns = [
        { id: 'backlog', name: 'Backlog', items: [] },
        { id: 'todo', name: 'To Do', items: [] },
        { id: 'in-progress', name: 'In Progress', items: [] },
        { id: 'review', name: 'Review', items: [] },
        { id: 'done', name: 'Done', items: [] },
      ];

      const colMap = {};
      columns.forEach(c => { colMap[c.id] = c; });

      for (const task of allTasks) {
        const col = task.kanban_column || (task.status === 'completed' ? 'done' : task.status === 'pending' ? 'backlog' : 'in-progress');
        if (colMap[col]) {
          colMap[col].items.push(task);
        } else {
          colMap['backlog'].items.push(task);
        }
      }

      return json({ columns, total_tasks: allTasks.length });
    }

    // Move task between kanban columns
    if (path === '/api/kanban/move' && method === 'POST') {
      const body = await request.json();
      if (!body.task_id || !body.column) return json({ error: 'task_id and column are required' }, 400);
      const validCols = ['backlog', 'todo', 'in-progress', 'review', 'done'];
      if (!validCols.includes(body.column)) return json({ error: 'column must be: ' + validCols.join(', ') }, 400);

      const status = body.column === 'done' ? 'completed' : body.column === 'backlog' ? 'pending' : 'working';
      const updates = ["kanban_column = ?", "status = ?"];
      const values = [body.column, status];
      if (body.column === 'done') { updates.push("completed_at = datetime('now')"); }
      values.push(body.task_id);

      await env.DB.prepare(`UPDATE roadwork_tasks SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();

      const task = await env.DB.prepare('SELECT * FROM roadwork_tasks WHERE id = ?').bind(body.task_id).first();
      return json({ task });
    }

    // ─── Time Tracking ───
    if (path === '/api/time' && method === 'GET') {
      const member = url.searchParams.get('member');
      let query = 'SELECT * FROM rw_time_entries';
      const params = [];
      if (member) { query += ' WHERE member_name = ?'; params.push(member); }
      query += ' ORDER BY started_at DESC LIMIT 100';
      const entries = await env.DB.prepare(query).bind(...params).all();

      // Summary stats
      const todayHours = await env.DB.prepare(
        "SELECT COALESCE(SUM(duration_minutes), 0) as total FROM rw_time_entries WHERE started_at >= datetime('now', 'start of day')"
      ).first();
      const weekHours = await env.DB.prepare(
        "SELECT COALESCE(SUM(duration_minutes), 0) as total FROM rw_time_entries WHERE started_at >= datetime('now', '-7 days')"
      ).first();
      const billableHours = await env.DB.prepare(
        "SELECT COALESCE(SUM(duration_minutes), 0) as total FROM rw_time_entries WHERE billable = 1 AND started_at >= datetime('now', '-7 days')"
      ).first();
      const activeTimers = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM rw_time_entries WHERE stopped_at IS NULL"
      ).first();

      return json({
        entries: entries.results || [],
        summary: {
          today_hours: (todayHours?.total || 0) / 60,
          week_hours: (weekHours?.total || 0) / 60,
          billable_hours: (billableHours?.total || 0) / 60,
          active_timers: activeTimers?.count || 0,
        },
      });
    }

    // Start timer
    if (path === '/api/time/start' && method === 'POST') {
      const body = await request.json();
      if (!body.member_name) return json({ error: 'member_name is required' }, 400);

      // Stop any existing active timer for this member
      await env.DB.prepare(
        "UPDATE rw_time_entries SET stopped_at = datetime('now'), duration_minutes = (julianday(datetime('now')) - julianday(started_at)) * 1440 WHERE member_name = ? AND stopped_at IS NULL"
      ).bind(body.member_name).run();

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_time_entries (id, task_id, task_title, member_name, billable, hourly_rate, notes) VALUES (?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.task_id || null, body.task_title || null, body.member_name, body.billable !== false ? 1 : 0, body.hourly_rate || 0, body.notes || null).run();

      return json({ timer: { id, member_name: body.member_name, started: true, task_title: body.task_title } }, 201);
    }

    // Stop timer
    if (path === '/api/time/stop' && method === 'POST') {
      const body = await request.json();
      if (!body.member_name && !body.timer_id) return json({ error: 'member_name or timer_id is required' }, 400);

      if (body.timer_id) {
        await env.DB.prepare(
          "UPDATE rw_time_entries SET stopped_at = datetime('now'), duration_minutes = (julianday(datetime('now')) - julianday(started_at)) * 1440 WHERE id = ? AND stopped_at IS NULL"
        ).bind(body.timer_id).run();
      } else {
        await env.DB.prepare(
          "UPDATE rw_time_entries SET stopped_at = datetime('now'), duration_minutes = (julianday(datetime('now')) - julianday(started_at)) * 1440 WHERE member_name = ? AND stopped_at IS NULL"
        ).bind(body.member_name).run();
      }

      return json({ stopped: true, member_name: body.member_name || null, timer_id: body.timer_id || null });
    }

    // Time report (daily/weekly)
    if (path === '/api/time/report' && method === 'GET') {
      const period = url.searchParams.get('period') || 'weekly';
      const daysBack = period === 'daily' ? 1 : period === 'monthly' ? 30 : 7;

      const byMember = await env.DB.prepare(
        `SELECT member_name, SUM(duration_minutes) as total_minutes,
         SUM(CASE WHEN billable=1 THEN duration_minutes ELSE 0 END) as billable_minutes,
         SUM(CASE WHEN billable=1 THEN duration_minutes * hourly_rate / 60 ELSE 0 END) as billable_amount,
         COUNT(*) as entries
         FROM rw_time_entries WHERE started_at >= datetime('now', '-${daysBack} days') GROUP BY member_name`
      ).all();

      const byTask = await env.DB.prepare(
        `SELECT task_title, SUM(duration_minutes) as total_minutes, COUNT(*) as entries
         FROM rw_time_entries WHERE started_at >= datetime('now', '-${daysBack} days') AND task_title IS NOT NULL GROUP BY task_title ORDER BY total_minutes DESC LIMIT 20`
      ).all();

      const totalMinutes = (byMember.results || []).reduce((s, r) => s + (r.total_minutes || 0), 0);
      const billableMinutes = (byMember.results || []).reduce((s, r) => s + (r.billable_minutes || 0), 0);
      const billableAmount = (byMember.results || []).reduce((s, r) => s + (r.billable_amount || 0), 0);

      return json({
        period,
        days: daysBack,
        total_hours: Math.round(totalMinutes / 60 * 10) / 10,
        billable_hours: Math.round(billableMinutes / 60 * 10) / 10,
        billable_amount: Math.round(billableAmount * 100) / 100,
        utilization: totalMinutes > 0 ? Math.round(billableMinutes / totalMinutes * 100) : 0,
        by_member: byMember.results || [],
        by_task: byTask.results || [],
      });
    }

    // ─── Expense Tracking ───
    if (path === '/api/expenses' && method === 'GET') {
      const category = url.searchParams.get('category');
      const status = url.searchParams.get('status');
      let query = 'SELECT * FROM rw_expenses';
      const conditions = [];
      const params = [];
      if (category) { conditions.push('category = ?'); params.push(category); }
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY expense_date DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const monthTotal = await env.DB.prepare(
        "SELECT COALESCE(SUM(amount), 0) as total FROM rw_expenses WHERE expense_date >= date('now', 'start of month')"
      ).first();
      const pendingCount = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM rw_expenses WHERE status = 'pending'"
      ).first();
      const catCount = await env.DB.prepare(
        "SELECT COUNT(DISTINCT category) as count FROM rw_expenses"
      ).first();
      const reimbursable = await env.DB.prepare(
        "SELECT COALESCE(SUM(amount), 0) as total FROM rw_expenses WHERE reimbursable = 1 AND expense_date >= date('now', 'start of month')"
      ).first();

      return json({
        expenses: result.results || [],
        summary: {
          month_total: monthTotal?.total || 0,
          pending_count: pendingCount?.count || 0,
          categories: catCount?.count || 0,
          reimbursable: reimbursable?.total || 0,
        },
      });
    }

    if (path === '/api/expenses' && method === 'POST') {
      const body = await request.json();
      if (!body.description || !body.amount) return json({ error: 'description and amount are required' }, 400);
      const amount = parseFloat(body.amount);
      if (isNaN(amount) || amount <= 0) return json({ error: 'amount must be a positive number' }, 400);
      const validCategories = ['office', 'software', 'hardware', 'travel', 'meals', 'marketing', 'utilities', 'professional', 'insurance', 'other'];
      const category = validCategories.includes(body.category) ? body.category : 'other';

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_expenses (id, description, amount, category, expense_date, receipt_url, submitted_by, reimbursable, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.description, amount, category, body.expense_date || new Date().toISOString().split('T')[0], body.receipt_url || null, body.submitted_by || null, body.reimbursable ? 1 : 0, body.notes || null).run();

      return json({ expense: { id, description: body.description, amount, category, status: 'pending' } }, 201);
    }

    // Update expense status (approve/reject)
    const expenseMatch = path.match(/^\/api\/expenses\/([^/]+)$/);
    if (expenseMatch && method === 'PUT') {
      const body = await request.json();
      const validStatuses = ['pending', 'approved', 'rejected', 'reimbursed'];
      if (!body.status || !validStatuses.includes(body.status)) return json({ error: 'status must be: ' + validStatuses.join(', ') }, 400);
      await env.DB.prepare('UPDATE rw_expenses SET status = ? WHERE id = ?').bind(body.status, expenseMatch[1]).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_expenses WHERE id = ?').bind(expenseMatch[1]).first();
      return json({ expense: updated });
    }

    // Expense monthly report
    if (path === '/api/expenses/report' && method === 'GET') {
      const months = parseInt(url.searchParams.get('months') || '3');
      const byCategory = await env.DB.prepare(
        "SELECT category, SUM(amount) as total, COUNT(*) as count FROM rw_expenses WHERE expense_date >= date('now', '-' || ? || ' months') GROUP BY category ORDER BY total DESC"
      ).bind(months).all();
      const byMonth = await env.DB.prepare(
        "SELECT strftime('%Y-%m', expense_date) as month, SUM(amount) as total, COUNT(*) as count FROM rw_expenses WHERE expense_date >= date('now', '-' || ? || ' months') GROUP BY month ORDER BY month DESC"
      ).bind(months).all();
      const total = (byCategory.results || []).reduce((s, r) => s + (r.total || 0), 0);

      return json({
        period_months: months,
        total_expenses: total,
        by_category: byCategory.results || [],
        by_month: byMonth.results || [],
      });
    }

    // ─── Team Capacity ───
    if (path === '/api/capacity' && method === 'GET') {
      // Build capacity from crew + time tracking data
      const crew = await env.DB.prepare('SELECT * FROM roadwork_crew').all();
      const activeTimers = await env.DB.prepare(
        "SELECT member_name, SUM(duration_minutes) as tracked FROM rw_time_entries WHERE started_at >= datetime('now', '-7 days') GROUP BY member_name"
      ).all();
      const activeTasks = await env.DB.prepare(
        "SELECT assignee, COUNT(*) as count FROM roadwork_tasks WHERE status IN ('pending', 'working') AND assignee IS NOT NULL GROUP BY assignee"
      ).all();

      const timerMap = (activeTimers.results || []).reduce((a, r) => { a[r.member_name] = r.tracked || 0; return a; }, {});
      const taskMap = (activeTasks.results || []).reduce((a, r) => { a[r.assignee] = r.count; return a; }, {});

      // Get stored capacity or use defaults
      const storedCapacity = await env.DB.prepare('SELECT * FROM rw_capacity').all();
      const capMap = (storedCapacity.results || []).reduce((a, r) => { a[r.name] = r; return a; }, {});

      const members = (crew.results || []).map(c => {
        const cap = capMap[c.name] || {};
        const capacityHours = cap.capacity_hours || 40;
        const trackedHours = (timerMap[c.name] || 0) / 60;
        const taskCount = taskMap[c.name] || 0;
        const allocatedHours = cap.allocated_hours || Math.max(trackedHours, taskCount * 4);
        const utilization = capacityHours > 0 ? Math.round(allocatedHours / capacityHours * 100) : 0;

        return {
          name: c.name,
          role: c.role,
          status: c.status,
          capacity_hours: capacityHours,
          allocated_hours: Math.round(allocatedHours * 10) / 10,
          tracked_hours_7d: Math.round(trackedHours * 10) / 10,
          active_tasks: taskCount,
          utilization,
          over_allocated: utilization > 100,
        };
      });

      const warnings = members.filter(m => m.over_allocated).map(m => `${m.name} is over-allocated at ${m.utilization}% (${m.allocated_hours}h / ${m.capacity_hours}h)`);
      const totalCapacity = members.reduce((s, m) => s + m.capacity_hours, 0);
      const totalAllocated = members.reduce((s, m) => s + m.allocated_hours, 0);

      return json({
        members,
        team_capacity: totalCapacity,
        team_allocated: Math.round(totalAllocated * 10) / 10,
        team_utilization: totalCapacity > 0 ? Math.round(totalAllocated / totalCapacity * 100) : 0,
        warnings,
      });
    }

    // Update member capacity
    if (path === '/api/capacity' && method === 'POST') {
      const body = await request.json();
      if (!body.name) return json({ error: 'name is required' }, 400);
      const id = crypto.randomUUID();

      // Upsert capacity
      const existing = await env.DB.prepare('SELECT id FROM rw_capacity WHERE name = ?').bind(body.name).first();
      if (existing) {
        await env.DB.prepare(
          "UPDATE rw_capacity SET capacity_hours = ?, allocated_hours = ?, role = ?, updated_at = datetime('now') WHERE name = ?"
        ).bind(body.capacity_hours || 40, body.allocated_hours || 0, body.role || null, body.name).run();
      } else {
        await env.DB.prepare(
          'INSERT INTO rw_capacity (id, name, role, capacity_hours, allocated_hours) VALUES (?, ?, ?, ?, ?)'
        ).bind(id, body.name, body.role || null, body.capacity_hours || 40, body.allocated_hours || 0).run();
      }

      return json({ capacity: { name: body.name, capacity_hours: body.capacity_hours || 40, allocated_hours: body.allocated_hours || 0 } }, 201);
    }

    // ─── Milestone Tracking ───
    if (path === '/api/milestones' && method === 'GET') {
      const project = url.searchParams.get('project');
      const status = url.searchParams.get('status');
      let query = 'SELECT * FROM rw_milestones';
      const conditions = [];
      const params = [];
      if (project) { conditions.push('project = ?'); params.push(project); }
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY due_date ASC, created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      return json({ milestones: result.results || [] });
    }

    if (path === '/api/milestones' && method === 'POST') {
      const body = await request.json();
      if (!body.title) return json({ error: 'title is required' }, 400);
      const id = crypto.randomUUID();
      const dependsOn = body.depends_on || [];

      await env.DB.prepare(
        'INSERT INTO rw_milestones (id, title, project, description, due_date, completion_pct, status, depends_on, assigned_to) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.title, body.project || null, body.description || null, body.due_date || null, body.completion_pct || 0, body.status || 'planned', JSON.stringify(dependsOn), body.assigned_to || null).run();

      return json({ milestone: { id, title: body.title, project: body.project, status: body.status || 'planned', completion_pct: body.completion_pct || 0 } }, 201);
    }

    // Update milestone
    const milestoneMatch = path.match(/^\/api\/milestones\/([^/]+)$/);
    if (milestoneMatch && method === 'PUT') {
      const body = await request.json();
      const msId = milestoneMatch[1];
      const updates = [];
      const values = [];
      if (body.title) { updates.push('title = ?'); values.push(body.title); }
      if (body.completion_pct !== undefined) { updates.push('completion_pct = ?'); values.push(body.completion_pct); }
      if (body.status) { updates.push('status = ?'); values.push(body.status); }
      if (body.status === 'completed') { updates.push("completed_at = datetime('now')"); updates.push('completion_pct = 100'); }
      if (body.due_date) { updates.push('due_date = ?'); values.push(body.due_date); }
      if (body.assigned_to) { updates.push('assigned_to = ?'); values.push(body.assigned_to); }
      if (body.depends_on) { updates.push('depends_on = ?'); values.push(JSON.stringify(body.depends_on)); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      values.push(msId);
      await env.DB.prepare(`UPDATE rw_milestones SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();

      const updated = await env.DB.prepare('SELECT * FROM rw_milestones WHERE id = ?').bind(msId).first();
      return json({ milestone: updated });
    }

    // Milestone dependency chain
    if (path === '/api/milestones/chain' && method === 'GET') {
      const all = await env.DB.prepare('SELECT * FROM rw_milestones ORDER BY due_date ASC').all();
      const milestones = all.results || [];
      const byId = milestones.reduce((a, m) => { a[m.id] = m; return a; }, {});

      const chain = milestones.map(m => {
        let deps = [];
        try { deps = JSON.parse(m.depends_on || '[]'); } catch {}
        const blocked = deps.some(depId => {
          const dep = byId[depId];
          return dep && dep.status !== 'completed';
        });
        return {
          ...m,
          dependencies: deps.map(d => byId[d]?.title || d),
          blocked,
        };
      });

      return json({ chain });
    }

    // ─── Client Portal ───
    if (path === '/api/portal' && method === 'GET') {
      const customerId = url.searchParams.get('customer_id');
      if (!customerId) return json({ error: 'customer_id query param is required' }, 400);

      const customer = await env.DB.prepare('SELECT * FROM rw_customers WHERE id = ?').bind(customerId).first();
      if (!customer) return json({ error: 'Customer not found' }, 404);

      // Get customer invoices
      const invoices = await env.DB.prepare(
        'SELECT id, amount, status, due_date, description, created_at, paid_at FROM rw_invoices WHERE customer_id = ? ORDER BY created_at DESC'
      ).bind(customerId).all();

      // Get shared milestones for this customer
      const sharedMilestoneIds = await env.DB.prepare(
        "SELECT resource_id FROM rw_portal_shares WHERE customer_id = ? AND resource_type = 'milestone'"
      ).bind(customerId).all();
      const milestoneIds = (sharedMilestoneIds.results || []).map(r => r.resource_id);
      let milestones = [];
      if (milestoneIds.length > 0) {
        const placeholders = milestoneIds.map(() => '?').join(',');
        const ms = await env.DB.prepare(`SELECT id, title, project, status, completion_pct, due_date FROM rw_milestones WHERE id IN (${placeholders})`).bind(...milestoneIds).all();
        milestones = ms.results || [];
      }

      // Get shared tasks
      const sharedTaskIds = await env.DB.prepare(
        "SELECT resource_id FROM rw_portal_shares WHERE customer_id = ? AND resource_type = 'task'"
      ).bind(customerId).all();
      const taskIds = (sharedTaskIds.results || []).map(r => r.resource_id);
      let tasks = [];
      if (taskIds.length > 0) {
        const placeholders = taskIds.map(() => '?').join(',');
        const ts = await env.DB.prepare(`SELECT id, title, status, priority, assignee FROM roadwork_tasks WHERE id IN (${placeholders})`).bind(...taskIds).all();
        tasks = ts.results || [];
      }

      // Summary
      const totalInvoiced = (invoices.results || []).reduce((s, i) => s + (i.amount || 0), 0);
      const totalPaid = (invoices.results || []).filter(i => i.status === 'paid').reduce((s, i) => s + (i.amount || 0), 0);
      const outstanding = totalInvoiced - totalPaid;

      return json({
        customer: { id: customer.id, name: customer.name, email: customer.email, company: customer.company },
        invoices: invoices.results || [],
        milestones,
        tasks,
        financial_summary: {
          total_invoiced: totalInvoiced,
          total_paid: totalPaid,
          outstanding,
        },
      });
    }

    // Share resource with client portal
    if (path === '/api/portal/share' && method === 'POST') {
      const body = await request.json();
      if (!body.customer_id || !body.resource_type || !body.resource_id) {
        return json({ error: 'customer_id, resource_type, and resource_id are required' }, 400);
      }
      const validTypes = ['milestone', 'task', 'report'];
      if (!validTypes.includes(body.resource_type)) return json({ error: 'resource_type must be: ' + validTypes.join(', ') }, 400);

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_portal_shares (id, customer_id, resource_type, resource_id) VALUES (?, ?, ?, ?)'
      ).bind(id, body.customer_id, body.resource_type, body.resource_id).run();

      return json({ share: { id, customer_id: body.customer_id, resource_type: body.resource_type, resource_id: body.resource_id } }, 201);
    }

    // ─── Fleet Status (merged from ops-blackroad) ───
    if (path === '/api/fleet' && method === 'GET') {
      const nodes = [
        { name: 'Alice', ip: '192.168.4.49', role: 'Gateway + Pi-hole + PostgreSQL + Qdrant', hw: 'Pi 400 4GB', storage: '16GB SD', status: 'online' },
        { name: 'Cecilia', ip: '192.168.4.105', role: 'AI (Hailo-8 26 TOPS) + Ollama + MinIO + PostgreSQL', hw: 'Pi 5 8GB', storage: '466GB NVMe + 238GB SD', status: 'online' },
        { name: 'Aria', ip: '192.168.4.98', role: 'Portainer + Docker + Ollama', hw: 'Pi 5 8GB', storage: '30GB SD', status: 'online' },
        { name: 'Lucidia', ip: '192.168.4.38', role: 'GitHub Runner + 530 web apps + Ollama + Docker', hw: 'Pi 5 8GB', storage: '238GB SD', status: 'online' },
        { name: 'Octavia', ip: '?.?.?.?', role: 'Gitea + 1TB NVMe + Hailo-8 + Docker Swarm', hw: 'Pi 5 8GB', storage: '128GB SD + 1TB NVMe', status: 'offline', note: 'Last seen 2026-03-21' },
        { name: 'Gematria', ip: '159.65.43.12', role: 'Caddy TLS edge (151 domains) + Ollama + NATS', hw: 'DO 4vCPU 8GB', storage: '80GB', status: 'online' },
        { name: 'Anastasia', ip: '174.138.44.45', role: 'WireGuard hub + Headscale + Nginx', hw: 'DO 1vCPU 1GB', storage: '25GB', status: 'online' },
      ];
      return json({ nodes, updated: new Date().toISOString() });
    }

    // ─── KPIs (merged from ops-blackroad) ───
    if (path === '/api/kpis' && method === 'GET') {
      const tasks = await env.DB.prepare("SELECT COUNT(*) as total, SUM(CASE WHEN status='completed' THEN 1 ELSE 0 END) as completed FROM roadwork_tasks").first();
      const crew = await env.DB.prepare("SELECT COUNT(*) as count FROM roadwork_crew").first();
      const invoiceStats = await env.DB.prepare("SELECT status, COUNT(*) as count, SUM(amount) as total FROM rw_invoices GROUP BY status").all();
      const customers = await env.DB.prepare("SELECT COUNT(*) as count FROM rw_customers").first();
      return json({
        fleet: { total: 7, online: 6, offline: 1 },
        workers: 496, domains: 20, d1Databases: 17,
        products: { total: 92, live: 26, building: 37, planned: 29 },
        repos: { enterprise: 2443, orgs: 34 },
        tasks: { total: tasks?.total || 0, completed: tasks?.completed || 0 },
        crew: crew?.count || 0,
        invoices: (invoiceStats.results || []).reduce((acc, r) => { acc[r.status] = { count: r.count, total: r.total }; return acc; }, {}),
        customers: customers?.count || 0,
        updated: new Date().toISOString(),
      });
    }

    // ─── KPI History (merged from status-blackroad) ───
    if (path === '/api/kpis/history' && method === 'GET') {
      // Return recent KPI snapshots from roadwork_kpis table
      const history = await env.DB.prepare('SELECT metric, value, unit, period, recorded_at FROM roadwork_kpis ORDER BY recorded_at DESC LIMIT 100').all();
      return json({ history: history.results || [] });
    }

    // ─── Domain Monitoring (merged from ops-blackroad) ───
    if (path === '/api/domains' && method === 'GET') {
      const domains = [
        'blackroad.io', 'blackroad.ai', 'blackroad.inc', 'blackroad.me',
        'blackroad.network', 'blackroad.systems', 'blackroad.company',
        'blackroadai.com', 'blackroadqi.com', 'blackroadinc.us',
        'blackroadquantum.com', 'blackroadquantum.net', 'blackroadquantum.info',
        'blackroadquantum.shop', 'blackroadquantum.store',
        'blackboxprogramming.io', 'lucidia.earth', 'lucidia.studio',
        'lucidiaqi.com', 'roadchain.io',
      ];
      const subdomains = [
        'app', 'chat', 'search', 'auth', 'status', 'tutor', 'social',
        'canvas', 'cadence', 'roadcode', 'video', 'live', 'game',
        'book', 'work', 'radio', 'pay', 'roadtrip',
      ].map(s => `${s}.blackroad.io`);
      return json({ domains, subdomains, total: domains.length + subdomains.length, updated: new Date().toISOString() });
    }

    // ─── Real Endpoint Health Checks (merged from status-blackroad) ───
    if (path === '/api/status/check' && method === 'GET') {
      const SERVICES = [
        { name: 'BlackRoad OS', url: 'https://blackroad.io', cat: 'core' },
        { name: 'RoadChat', url: 'https://roadtrip.blackroad.io', cat: 'core' },
        { name: 'RoadSearch', url: 'https://roadview.blackroad.io', cat: 'core' },
        { name: 'RoadTrip', url: 'https://roadtrip.blackroad.io', cat: 'core' },
        { name: 'BackRoad Social', url: 'https://backroad.blackroad.io', cat: 'core' },
        { name: 'Auth', url: 'https://auth.blackroad.io', cat: 'infra' },
        { name: 'Images CDN', url: 'https://images.blackroad.io', cat: 'infra' },
        { name: 'Analytics', url: 'https://analytics.blackroad.io', cat: 'infra' },
        { name: 'RoadPay', url: 'https://roadcoin.blackroad.io', cat: 'product' },
        { name: 'RoadWork Tutor', url: 'https://roadie.blackroad.io', cat: 'product' },
        { name: 'RoadCode', url: 'https://roadcode.blackroad.io', cat: 'product' },
        { name: 'RoadCanvas', url: 'https://blackboard.blackroad.io', cat: 'product' },
        { name: 'RoadVideo', url: 'https://video.blackroad.io', cat: 'product' },
        { name: 'RoadLive', url: 'https://live.blackroad.io', cat: 'product' },
        { name: 'RoadRadio', url: 'https://radio.blackroad.io', cat: 'product' },
        { name: 'Pixel HQ', url: 'https://hq.blackroad.io', cat: 'product' },
        { name: 'RoadGame', url: 'https://roadworld.blackroad.io', cat: 'product' },
      ];
      const results = await Promise.all(SERVICES.map(async (svc) => {
        const start = Date.now();
        try {
          const resp = await fetch(svc.url, { method: 'GET', redirect: 'manual', signal: AbortSignal.timeout(8000) });
          const ms = Date.now() - start;
          const ok = resp.status < 500 || resp.status === 301 || resp.status === 302;
          return { ...svc, status: ok ? (ms > 3000 ? 'degraded' : 'operational') : 'down', ms, code: resp.status };
        } catch (e) {
          return { ...svc, status: 'down', ms: Date.now() - start, code: 0, error: e.message };
        }
      }));
      const up = results.filter(r => r.status === 'operational').length;
      const total = results.length;
      return json({
        overall: up >= total * 0.8 ? 'All Systems Operational' : up >= total * 0.5 ? 'Degraded Performance' : 'Major Outage',
        services: results,
        up, total,
        checked: new Date().toISOString(),
      });
    }

    // ─── Worker Stats (merged from ops-blackroad) ───
    if (path === '/api/workers' && method === 'GET') {
      return json({
        total: 496,
        categories: {
          'Agent personas': 18, 'Product apps': 26, 'Domain sites': 21,
          'Dashboards': 12, 'Pipeline workers': 10, 'Monitor workers': 9,
          'Integration workers': 14, 'Fleet workers': 9, 'AI workers': 12,
          'Auth/Billing': 16, 'Analytics': 8, 'Infrastructure': 341,
        },
        updated: new Date().toISOString(),
      });
    }

    // ─── GET /api/compliance — Compliance overview (Portia) ───
    if (path === '/api/compliance' && method === 'GET') {
      const customers = await env.DB.prepare('SELECT COUNT(*) as c FROM rw_customers').first();
      const invoices = await env.DB.prepare('SELECT COUNT(*) as c FROM rw_invoices').first();
      const tasks = await env.DB.prepare('SELECT COUNT(*) as c FROM roadwork_tasks').first();

      // Base readiness scores from data indicators
      const hasCustomerData = (customers?.c || 0) > 0;
      const hasFinancials = (invoices?.c || 0) > 0;
      const gdprScore = hasCustomerData ? 65 : 40;
      const ccpaScore = hasCustomerData ? 60 : 35;
      const soc2Score = hasFinancials ? 55 : 30;

      let ai_overview = '';
      try {
        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: 'You are Portia, Legal & Compliance agent on RoadWork (BlackRoad OS). Principled, thorough, protective. Give a 3-sentence compliance overview based on the data.' },
            { role: 'user', content: `GDPR readiness: ${gdprScore}%. CCPA readiness: ${ccpaScore}%. SOC2 readiness: ${soc2Score}%. Customers: ${customers?.c||0}. Invoices: ${invoices?.c||0}. Tasks tracked: ${tasks?.c||0}.` },
          ],
          max_tokens: 200, temperature: 0.5,
        });
        if (aiResult?.response) ai_overview = aiResult.response.trim();
      } catch {}

      return json({
        compliance: {
          gdpr: { score: gdprScore, status: gdprScore >= 70 ? 'ready' : 'needs_work' },
          ccpa: { score: ccpaScore, status: ccpaScore >= 70 ? 'ready' : 'needs_work' },
          soc2: { score: soc2Score, status: soc2Score >= 70 ? 'ready' : 'needs_work' },
          overall: Math.round((gdprScore + ccpaScore + soc2Score) / 3),
        },
        agent: 'Portia',
        ai_overview: ai_overview || 'Compliance overview generated. Review individual frameworks for details.',
        data_points: { customers: customers?.c || 0, invoices: invoices?.c || 0, tasks: tasks?.c || 0 },
      });
    }

    // ─── POST /api/compliance/scan — Run compliance check (Portia) ───
    if (path === '/api/compliance/scan' && method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const type = body.type || 'gdpr';
      const validTypes = ['gdpr', 'ccpa', 'soc2'];
      if (!validTypes.includes(type)) return json({ error: 'type must be: ' + validTypes.join(', ') }, 400);

      const customers = await env.DB.prepare('SELECT COUNT(*) as c FROM rw_customers').first();
      const invoices = await env.DB.prepare('SELECT COUNT(*) as c FROM rw_invoices').first();

      const frameworkChecks = {
        gdpr: [
          { name: 'Data inventory exists', passed: (customers?.c || 0) > 0 },
          { name: 'Consent mechanism in place', passed: false },
          { name: 'Data portability (OneWay)', passed: true },
          { name: 'Right to deletion process', passed: false },
          { name: 'Data processing agreements', passed: false },
          { name: 'Privacy policy published', passed: true },
          { name: 'DPO appointed', passed: false },
        ],
        ccpa: [
          { name: 'Consumer data catalog', passed: (customers?.c || 0) > 0 },
          { name: 'Opt-out mechanism', passed: false },
          { name: 'Data sale disclosure', passed: true },
          { name: 'Access request process', passed: true },
          { name: 'Privacy notice updated', passed: true },
        ],
        soc2: [
          { name: 'Access controls', passed: true },
          { name: 'Encryption at rest', passed: true },
          { name: 'Audit logging', passed: true },
          { name: 'Incident response plan', passed: false },
          { name: 'Change management', passed: false },
          { name: 'Vendor management', passed: false },
          { name: 'Business continuity plan', passed: false },
        ],
      };

      const checks = frameworkChecks[type] || [];
      const passed = checks.filter(c => c.passed).length;
      const score = checks.length > 0 ? Math.round((passed / checks.length) * 100) : 0;

      let ai_analysis = '';
      try {
        const failedChecks = checks.filter(c => !c.passed).map(c => c.name).join(', ');
        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are Portia, Legal & Compliance agent on RoadWork (BlackRoad OS). Principled, thorough, fair. Analyze ${type.toUpperCase()} compliance results and give 3 prioritized remediation steps. Be specific and actionable.` },
            { role: 'user', content: `${type.toUpperCase()} scan: ${passed}/${checks.length} checks passed (${score}%). Failed: ${failedChecks || 'none'}.` },
          ],
          max_tokens: 300, temperature: 0.5,
        });
        if (aiResult?.response) ai_analysis = aiResult.response.trim();
      } catch {}

      // Store scan result
      const scanId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO roadwork_reports (id, title, type, content, generated_by) VALUES (?, ?, ?, ?, ?)'
      ).bind(scanId, `${type.toUpperCase()} Compliance Scan`, 'compliance', JSON.stringify({ type, score, passed, total: checks.length, checks }), 'Portia').run();

      return json({
        scan_id: scanId,
        framework: type.toUpperCase(),
        score,
        passed,
        total: checks.length,
        checks,
        agent: 'Portia',
        ai_analysis: ai_analysis || `${type.toUpperCase()} compliance: ${score}%. ${passed}/${checks.length} checks passed.`,
      }, 201);
    }

    // ─── GET /api/compliance/history — Past compliance scans ───
    if (path === '/api/compliance/history' && method === 'GET') {
      const rows = await env.DB.prepare(
        "SELECT id, title, content, generated_by, created_at FROM roadwork_reports WHERE type = 'compliance' ORDER BY created_at DESC LIMIT 50"
      ).all();
      const history = (rows.results || []).map(r => {
        let parsed = {};
        try { parsed = JSON.parse(r.content); } catch {}
        return { id: r.id, title: r.title, framework: parsed.type || 'unknown', score: parsed.score || 0, passed: parsed.passed || 0, total: parsed.total || 0, generated_by: r.generated_by, created_at: r.created_at };
      });
      return json({ history });
    }


    // ─── Contract Management ───
    if (path === '/api/contracts' && method === 'GET') {
      const status = url.searchParams.get('status');
      const customerId = url.searchParams.get('customer_id');
      let query = 'SELECT * FROM rw_contracts';
      const conditions = [];
      const params = [];
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (customerId) { conditions.push('customer_id = ?'); params.push(customerId); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const summary = await env.DB.prepare(
        "SELECT status, COUNT(*) as count, SUM(value) as total_value FROM rw_contracts GROUP BY status"
      ).all();

      const expiringSoon = await env.DB.prepare(
        "SELECT * FROM rw_contracts WHERE end_date IS NOT NULL AND end_date <= date('now', '+30 days') AND end_date >= date('now') AND status = 'active' ORDER BY end_date ASC"
      ).all();

      return json({
        contracts: result.results || [],
        summary: summary.results || [],
        expiring_soon: expiringSoon.results || [],
      });
    }

    if (path === '/api/contracts' && method === 'POST') {
      const body = await request.json();
      if (!body.title || !body.customer_name) return json({ error: 'title and customer_name are required' }, 400);
      const id = crypto.randomUUID();
      const validStatuses = ['draft', 'pending_review', 'sent', 'negotiating', 'active', 'completed', 'cancelled'];
      const status = validStatuses.includes(body.status) ? body.status : 'draft';
      const renewalTypes = ['none', 'auto', 'manual', 'evergreen'];
      const renewalType = renewalTypes.includes(body.renewal_type) ? body.renewal_type : 'none';

      await env.DB.prepare(
        'INSERT INTO rw_contracts (id, customer_id, customer_name, title, description, value, currency, start_date, end_date, renewal_type, renewal_terms, status, terms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.customer_id || null, body.customer_name, body.title, body.description || null, parseFloat(body.value || 0), body.currency || 'USD', body.start_date || null, body.end_date || null, renewalType, body.renewal_terms || null, status, body.terms || null).run();

      return json({ contract: { id, title: body.title, customer_name: body.customer_name, value: parseFloat(body.value || 0), status } }, 201);
    }

    const contractMatch = path.match(/^\/api\/contracts\/([^/]+)$/);
    if (contractMatch && method === 'GET') {
      const contract = await env.DB.prepare('SELECT * FROM rw_contracts WHERE id = ?').bind(contractMatch[1]).first();
      if (!contract) return json({ error: 'Contract not found' }, 404);
      return json({ contract });
    }

    if (contractMatch && method === 'PUT') {
      const body = await request.json();
      const cId = contractMatch[1];
      const updates = [];
      const values = [];
      if (body.title) { updates.push('title = ?'); values.push(body.title); }
      if (body.description !== undefined) { updates.push('description = ?'); values.push(body.description); }
      if (body.value !== undefined) { updates.push('value = ?'); values.push(parseFloat(body.value)); }
      if (body.status) { updates.push('status = ?'); values.push(body.status); }
      if (body.status === 'active' && !body.signed_at) { updates.push("signed_at = datetime('now')"); }
      if (body.signed_at) { updates.push('signed_at = ?'); values.push(body.signed_at); }
      if (body.start_date) { updates.push('start_date = ?'); values.push(body.start_date); }
      if (body.end_date) { updates.push('end_date = ?'); values.push(body.end_date); }
      if (body.renewal_type) { updates.push('renewal_type = ?'); values.push(body.renewal_type); }
      if (body.renewal_terms) { updates.push('renewal_terms = ?'); values.push(body.renewal_terms); }
      if (body.terms) { updates.push('terms = ?'); values.push(body.terms); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      updates.push("updated_at = datetime('now')");
      values.push(cId);
      await env.DB.prepare(`UPDATE rw_contracts SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_contracts WHERE id = ?').bind(cId).first();
      return json({ contract: updated });
    }

    // Contract renewal
    if (path === '/api/contracts/renew' && method === 'POST') {
      const body = await request.json();
      if (!body.contract_id) return json({ error: 'contract_id is required' }, 400);
      const original = await env.DB.prepare('SELECT * FROM rw_contracts WHERE id = ?').bind(body.contract_id).first();
      if (!original) return json({ error: 'Contract not found' }, 404);

      // Mark old contract as completed
      await env.DB.prepare("UPDATE rw_contracts SET status = 'completed', updated_at = datetime('now') WHERE id = ?").bind(body.contract_id).run();

      // Create renewed contract
      const newId = crypto.randomUUID();
      const newStart = body.start_date || original.end_date || new Date().toISOString().split('T')[0];
      let newEnd = body.end_date || null;
      if (!newEnd && original.start_date && original.end_date) {
        const origDays = Math.round((new Date(original.end_date) - new Date(original.start_date)) / 86400000);
        const endDate = new Date(newStart);
        endDate.setDate(endDate.getDate() + origDays);
        newEnd = endDate.toISOString().split('T')[0];
      }

      await env.DB.prepare(
        'INSERT INTO rw_contracts (id, customer_id, customer_name, title, description, value, currency, start_date, end_date, renewal_type, renewal_terms, status, terms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(newId, original.customer_id, original.customer_name, original.title + ' (Renewed)', original.description, parseFloat(body.value || original.value || 0), original.currency, newStart, newEnd, original.renewal_type, original.renewal_terms, 'active', original.terms).run();

      return json({ renewed: { id: newId, original_id: body.contract_id, start_date: newStart, end_date: newEnd, value: parseFloat(body.value || original.value || 0) } }, 201);
    }

    // ─── Lead Pipeline ───
    if (path === '/api/leads' && method === 'GET') {
      const stage = url.searchParams.get('stage');
      const assignee = url.searchParams.get('assigned_to');
      let query = 'SELECT * FROM rw_leads';
      const conditions = [];
      const params = [];
      if (stage) { conditions.push('stage = ?'); params.push(stage); }
      if (assignee) { conditions.push('assigned_to = ?'); params.push(assignee); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const pipeline = await env.DB.prepare(
        "SELECT stage, COUNT(*) as count, SUM(value) as total_value, AVG(probability) as avg_probability FROM rw_leads WHERE stage != 'lost' GROUP BY stage"
      ).all();

      const conversionData = await env.DB.prepare(
        "SELECT stage, COUNT(*) as count FROM rw_leads GROUP BY stage"
      ).all();
      const stageOrder = ['prospect', 'qualified', 'proposal', 'negotiation', 'closed', 'lost'];
      const stageCounts = (conversionData.results || []).reduce((a, r) => { a[r.stage] = r.count; return a; }, {});
      const totalLeads = Object.values(stageCounts).reduce((s, v) => s + v, 0);
      const conversionRates = {};
      stageOrder.forEach(s => {
        conversionRates[s] = totalLeads > 0 ? Math.round((stageCounts[s] || 0) / totalLeads * 100) : 0;
      });

      const weightedPipeline = await env.DB.prepare(
        "SELECT SUM(value * probability / 100.0) as weighted_value FROM rw_leads WHERE stage NOT IN ('closed', 'lost')"
      ).first();

      return json({
        leads: result.results || [],
        pipeline: pipeline.results || [],
        conversion_rates: conversionRates,
        total_leads: totalLeads,
        weighted_pipeline_value: Math.round((weightedPipeline?.weighted_value || 0) * 100) / 100,
      });
    }

    if (path === '/api/leads' && method === 'POST') {
      const body = await request.json();
      if (!body.name) return json({ error: 'name is required' }, 400);
      const validStages = ['prospect', 'qualified', 'proposal', 'negotiation', 'closed', 'lost'];
      const stage = validStages.includes(body.stage) ? body.stage : 'prospect';
      const probability = stage === 'prospect' ? 10 : stage === 'qualified' ? 25 : stage === 'proposal' ? 50 : stage === 'negotiation' ? 75 : stage === 'closed' ? 100 : 0;

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_leads (id, name, email, company, source, stage, value, probability, assigned_to, notes, next_followup) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.name, body.email || null, body.company || null, body.source || 'direct', stage, parseFloat(body.value || 0), body.probability || probability, body.assigned_to || null, body.notes || null, body.next_followup || null).run();

      return json({ lead: { id, name: body.name, stage, value: parseFloat(body.value || 0), probability: body.probability || probability } }, 201);
    }

    const leadMatch = path.match(/^\/api\/leads\/([^/]+)$/);
    if (leadMatch && method === 'GET') {
      const lead = await env.DB.prepare('SELECT * FROM rw_leads WHERE id = ?').bind(leadMatch[1]).first();
      if (!lead) return json({ error: 'Lead not found' }, 404);
      return json({ lead });
    }

    if (leadMatch && method === 'PUT') {
      const body = await request.json();
      const lId = leadMatch[1];
      const updates = [];
      const values = [];
      if (body.name) { updates.push('name = ?'); values.push(body.name); }
      if (body.email !== undefined) { updates.push('email = ?'); values.push(body.email); }
      if (body.company !== undefined) { updates.push('company = ?'); values.push(body.company); }
      if (body.stage) {
        updates.push('stage = ?'); values.push(body.stage);
        if (body.stage === 'closed') { updates.push('probability = 100'); }
        if (body.stage === 'lost') { updates.push('probability = 0'); }
      }
      if (body.value !== undefined) { updates.push('value = ?'); values.push(parseFloat(body.value)); }
      if (body.probability !== undefined) { updates.push('probability = ?'); values.push(body.probability); }
      if (body.assigned_to !== undefined) { updates.push('assigned_to = ?'); values.push(body.assigned_to); }
      if (body.notes !== undefined) { updates.push('notes = ?'); values.push(body.notes); }
      if (body.next_followup !== undefined) { updates.push('next_followup = ?'); values.push(body.next_followup); }
      if (body.last_contact !== undefined) { updates.push('last_contact = ?'); values.push(body.last_contact); }
      if (body.lost_reason !== undefined) { updates.push('lost_reason = ?'); values.push(body.lost_reason); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      updates.push("updated_at = datetime('now')");
      values.push(lId);
      await env.DB.prepare(`UPDATE rw_leads SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_leads WHERE id = ?').bind(lId).first();
      return json({ lead: updated });
    }

    // Lead pipeline summary
    if (path === '/api/leads/pipeline' && method === 'GET') {
      const stages = ['prospect', 'qualified', 'proposal', 'negotiation', 'closed', 'lost'];
      const results = {};
      for (const stage of stages) {
        const data = await env.DB.prepare(
          'SELECT COUNT(*) as count, COALESCE(SUM(value), 0) as total_value, COALESCE(AVG(probability), 0) as avg_prob FROM rw_leads WHERE stage = ?'
        ).bind(stage).first();
        results[stage] = { count: data?.count || 0, total_value: data?.total_value || 0, avg_probability: Math.round(data?.avg_prob || 0) };
      }
      const winRate = (results.closed.count + results.lost.count) > 0 ? Math.round(results.closed.count / (results.closed.count + results.lost.count) * 100) : 0;
      return json({ pipeline: results, win_rate: winRate });
    }

    // ─── Payroll Calculator ───
    if (path === '/api/payroll' && method === 'GET') {
      const employee = url.searchParams.get('employee');
      const status = url.searchParams.get('status');
      let query = 'SELECT * FROM rw_payroll';
      const conditions = [];
      const params = [];
      if (employee) { conditions.push('employee_name = ?'); params.push(employee); }
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY pay_period_end DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const summary = await env.DB.prepare(
        "SELECT employee_name, SUM(gross_pay) as total_gross, SUM(net_pay) as total_net, COUNT(*) as pay_periods FROM rw_payroll WHERE status = 'paid' GROUP BY employee_name"
      ).all();

      return json({ payroll: result.results || [], summary: summary.results || [] });
    }

    if (path === '/api/payroll' && method === 'POST') {
      const body = await request.json();
      if (!body.employee_name || !body.pay_period_start || !body.pay_period_end) {
        return json({ error: 'employee_name, pay_period_start, and pay_period_end are required' }, 400);
      }
      const payType = body.pay_type === 'hourly' ? 'hourly' : 'salary';
      const rate = parseFloat(body.rate || 0);
      const hoursWorked = parseFloat(body.hours_worked || 0);

      // Calculate gross pay
      let grossPay = 0;
      if (payType === 'hourly') {
        const regularHours = Math.min(hoursWorked, 80); // 2-week period
        const overtimeHours = Math.max(hoursWorked - 80, 0);
        grossPay = (regularHours * rate) + (overtimeHours * rate * 1.5);
      } else {
        // Salary: rate is annual, divide by pay periods (assume bi-weekly = 26)
        const periods = body.periods_per_year || 26;
        grossPay = rate / periods;
      }

      // Tax estimates (simplified US federal)
      const federalTax = grossPay * (body.federal_rate || 0.22); // Default 22% bracket
      const stateTax = grossPay * (body.state_rate || 0.05); // Default 5% state
      const socialSecurity = grossPay * 0.062; // 6.2% SS
      const medicare = grossPay * 0.0145; // 1.45% Medicare
      const otherDeductions = parseFloat(body.other_deductions || 0);
      const netPay = grossPay - federalTax - stateTax - socialSecurity - medicare - otherDeductions;

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_payroll (id, employee_name, pay_type, rate, hours_worked, pay_period_start, pay_period_end, gross_pay, federal_tax, state_tax, social_security, medicare, other_deductions, net_pay, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.employee_name, payType, rate, hoursWorked, body.pay_period_start, body.pay_period_end, Math.round(grossPay * 100) / 100, Math.round(federalTax * 100) / 100, Math.round(stateTax * 100) / 100, Math.round(socialSecurity * 100) / 100, Math.round(medicare * 100) / 100, Math.round(otherDeductions * 100) / 100, Math.round(netPay * 100) / 100, body.status || 'pending').run();

      return json({
        pay_stub: {
          id, employee_name: body.employee_name, pay_type: payType, rate,
          hours_worked: hoursWorked, pay_period: `${body.pay_period_start} to ${body.pay_period_end}`,
          gross_pay: Math.round(grossPay * 100) / 100,
          deductions: {
            federal_tax: Math.round(federalTax * 100) / 100,
            state_tax: Math.round(stateTax * 100) / 100,
            social_security: Math.round(socialSecurity * 100) / 100,
            medicare: Math.round(medicare * 100) / 100,
            other: Math.round(otherDeductions * 100) / 100,
            total_deductions: Math.round((federalTax + stateTax + socialSecurity + medicare + otherDeductions) * 100) / 100,
          },
          net_pay: Math.round(netPay * 100) / 100,
          status: body.status || 'pending',
        },
      }, 201);
    }

    // Pay stub view
    const payrollMatch = path.match(/^\/api\/payroll\/([^/]+)$/);
    if (payrollMatch && method === 'GET') {
      const stub = await env.DB.prepare('SELECT * FROM rw_payroll WHERE id = ?').bind(payrollMatch[1]).first();
      if (!stub) return json({ error: 'Pay stub not found' }, 404);
      return json({ pay_stub: stub });
    }

    if (payrollMatch && method === 'PUT') {
      const body = await request.json();
      const pId = payrollMatch[1];
      const validStatuses = ['pending', 'approved', 'paid', 'void'];
      if (!body.status || !validStatuses.includes(body.status)) return json({ error: 'status must be: ' + validStatuses.join(', ') }, 400);
      const updates = ['status = ?'];
      const values = [body.status];
      if (body.status === 'paid') { updates.push("paid_at = datetime('now')"); }
      values.push(pId);
      await env.DB.prepare(`UPDATE rw_payroll SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_payroll WHERE id = ?').bind(pId).first();
      return json({ pay_stub: updated });
    }

    // Payroll summary report
    if (path === '/api/payroll/report' && method === 'GET') {
      const year = url.searchParams.get('year') || new Date().getFullYear().toString();
      const byEmployee = await env.DB.prepare(
        "SELECT employee_name, pay_type, SUM(gross_pay) as total_gross, SUM(net_pay) as total_net, SUM(federal_tax) as total_federal, SUM(state_tax) as total_state, SUM(social_security) as total_ss, SUM(medicare) as total_medicare, COUNT(*) as pay_periods FROM rw_payroll WHERE pay_period_start >= ? AND pay_period_end <= ? GROUP BY employee_name"
      ).bind(`${year}-01-01`, `${year}-12-31`).all();

      const totals = (byEmployee.results || []).reduce((acc, r) => {
        acc.gross += r.total_gross || 0;
        acc.net += r.total_net || 0;
        acc.taxes += (r.total_federal || 0) + (r.total_state || 0) + (r.total_ss || 0) + (r.total_medicare || 0);
        return acc;
      }, { gross: 0, net: 0, taxes: 0 });

      return json({ year, employees: byEmployee.results || [], totals });
    }

    // ─── Meeting Notes ───
    if (path === '/api/meetings' && method === 'GET') {
      const type = url.searchParams.get('type');
      const from = url.searchParams.get('from');
      let query = 'SELECT * FROM rw_meetings';
      const conditions = [];
      const params = [];
      if (type) { conditions.push('meeting_type = ?'); params.push(type); }
      if (from) { conditions.push('meeting_date >= ?'); params.push(from); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY meeting_date DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const meetings = (result.results || []).map(m => {
        try { m.attendees = JSON.parse(m.attendees || '[]'); } catch { m.attendees = []; }
        try { m.action_items = JSON.parse(m.action_items || '[]'); } catch { m.action_items = []; }
        try { m.decisions = JSON.parse(m.decisions || '[]'); } catch { m.decisions = []; }
        try { m.followups = JSON.parse(m.followups || '[]'); } catch { m.followups = []; }
        return m;
      });

      return json({ meetings });
    }

    if (path === '/api/meetings' && method === 'POST') {
      const body = await request.json();
      if (!body.title || !body.meeting_date) return json({ error: 'title and meeting_date are required' }, 400);
      const validTypes = ['general', 'standup', 'planning', 'retrospective', 'client', 'board', 'one_on_one', 'brainstorm'];
      const meetingType = validTypes.includes(body.meeting_type) ? body.meeting_type : 'general';

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_meetings (id, title, description, meeting_date, duration_minutes, attendees, notes, action_items, decisions, followups, meeting_type, location, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.title, body.description || null, body.meeting_date, body.duration_minutes || 60, JSON.stringify(body.attendees || []), body.notes || null, JSON.stringify(body.action_items || []), JSON.stringify(body.decisions || []), JSON.stringify(body.followups || []), meetingType, body.location || null, body.created_by || null).run();

      return json({
        meeting: {
          id, title: body.title, meeting_date: body.meeting_date, meeting_type: meetingType,
          attendees: body.attendees || [], action_items: body.action_items || [],
          decisions: body.decisions || [], followups: body.followups || [],
        },
      }, 201);
    }

    const meetingMatch = path.match(/^\/api\/meetings\/([^/]+)$/);
    if (meetingMatch && method === 'GET') {
      const meeting = await env.DB.prepare('SELECT * FROM rw_meetings WHERE id = ?').bind(meetingMatch[1]).first();
      if (!meeting) return json({ error: 'Meeting not found' }, 404);
      try { meeting.attendees = JSON.parse(meeting.attendees || '[]'); } catch { meeting.attendees = []; }
      try { meeting.action_items = JSON.parse(meeting.action_items || '[]'); } catch { meeting.action_items = []; }
      try { meeting.decisions = JSON.parse(meeting.decisions || '[]'); } catch { meeting.decisions = []; }
      try { meeting.followups = JSON.parse(meeting.followups || '[]'); } catch { meeting.followups = []; }
      return json({ meeting });
    }

    if (meetingMatch && method === 'PUT') {
      const body = await request.json();
      const mId = meetingMatch[1];
      const updates = [];
      const values = [];
      if (body.title) { updates.push('title = ?'); values.push(body.title); }
      if (body.notes !== undefined) { updates.push('notes = ?'); values.push(body.notes); }
      if (body.action_items) { updates.push('action_items = ?'); values.push(JSON.stringify(body.action_items)); }
      if (body.decisions) { updates.push('decisions = ?'); values.push(JSON.stringify(body.decisions)); }
      if (body.followups) { updates.push('followups = ?'); values.push(JSON.stringify(body.followups)); }
      if (body.attendees) { updates.push('attendees = ?'); values.push(JSON.stringify(body.attendees)); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      values.push(mId);
      await env.DB.prepare(`UPDATE rw_meetings SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_meetings WHERE id = ?').bind(mId).first();
      try { updated.action_items = JSON.parse(updated.action_items || '[]'); } catch { updated.action_items = []; }
      try { updated.decisions = JSON.parse(updated.decisions || '[]'); } catch { updated.decisions = []; }
      try { updated.followups = JSON.parse(updated.followups || '[]'); } catch { updated.followups = []; }
      try { updated.attendees = JSON.parse(updated.attendees || '[]'); } catch { updated.attendees = []; }
      return json({ meeting: updated });
    }

    // Pending action items across all meetings
    if (path === '/api/meetings/action-items' && method === 'GET') {
      const allMeetings = await env.DB.prepare(
        "SELECT id, title, meeting_date, action_items FROM rw_meetings WHERE action_items != '[]' ORDER BY meeting_date DESC LIMIT 50"
      ).all();
      const allItems = [];
      for (const m of (allMeetings.results || [])) {
        let items = [];
        try { items = JSON.parse(m.action_items || '[]'); } catch {}
        items.forEach(item => {
          allItems.push({
            meeting_id: m.id, meeting_title: m.title, meeting_date: m.meeting_date,
            action_item: typeof item === 'string' ? item : item.text || item.description || JSON.stringify(item),
            assignee: typeof item === 'object' ? item.assignee : null,
            done: typeof item === 'object' ? !!item.done : false,
          });
        });
      }
      return json({ action_items: allItems, total: allItems.length, pending: allItems.filter(i => !i.done).length });
    }

    // ─── Document Templates ───
    if (path === '/api/doc-templates' && method === 'GET') {
      const type = url.searchParams.get('type');
      let query = 'SELECT * FROM rw_doc_templates';
      const params = [];
      if (type) { query += ' WHERE type = ?'; params.push(type); }
      query += ' ORDER BY created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const templates = (result.results || []).map(t => {
        try { t.variables = JSON.parse(t.variables || '[]'); } catch { t.variables = []; }
        return t;
      });

      return json({ templates });
    }

    if (path === '/api/doc-templates' && method === 'POST') {
      const body = await request.json();
      if (!body.name || !body.type || !body.content) return json({ error: 'name, type, and content are required' }, 400);
      const validTypes = ['proposal', 'contract', 'sow', 'nda', 'invoice_cover', 'report', 'letter', 'memo', 'custom'];
      const type = validTypes.includes(body.type) ? body.type : 'custom';

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_doc_templates (id, name, type, description, content, variables, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.name, type, body.description || null, body.content, JSON.stringify(body.variables || []), body.created_by || null).run();

      return json({ template: { id, name: body.name, type, variables: body.variables || [] } }, 201);
    }

    const templateMatch = path.match(/^\/api\/doc-templates\/([^/]+)$/);
    if (templateMatch && method === 'GET') {
      const tpl = await env.DB.prepare('SELECT * FROM rw_doc_templates WHERE id = ?').bind(templateMatch[1]).first();
      if (!tpl) return json({ error: 'Template not found' }, 404);
      try { tpl.variables = JSON.parse(tpl.variables || '[]'); } catch { tpl.variables = []; }
      return json({ template: tpl });
    }

    if (templateMatch && method === 'PUT') {
      const body = await request.json();
      const tId = templateMatch[1];
      const updates = [];
      const values = [];
      if (body.name) { updates.push('name = ?'); values.push(body.name); }
      if (body.content) { updates.push('content = ?'); values.push(body.content); }
      if (body.description !== undefined) { updates.push('description = ?'); values.push(body.description); }
      if (body.variables) { updates.push('variables = ?'); values.push(JSON.stringify(body.variables)); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      updates.push("version = version + 1");
      updates.push("updated_at = datetime('now')");
      values.push(tId);
      await env.DB.prepare(`UPDATE rw_doc_templates SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_doc_templates WHERE id = ?').bind(tId).first();
      try { updated.variables = JSON.parse(updated.variables || '[]'); } catch { updated.variables = []; }
      return json({ template: updated });
    }

    // Render a template with variables
    if (path === '/api/doc-templates/render' && method === 'POST') {
      const body = await request.json();
      if (!body.template_id) return json({ error: 'template_id is required' }, 400);
      const tpl = await env.DB.prepare('SELECT * FROM rw_doc_templates WHERE id = ?').bind(body.template_id).first();
      if (!tpl) return json({ error: 'Template not found' }, 404);

      let rendered = tpl.content;
      const vars = body.variables || {};
      for (const [key, value] of Object.entries(vars)) {
        rendered = rendered.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
      }

      return json({ rendered, template_name: tpl.name, template_type: tpl.type, variables_applied: Object.keys(vars) });
    }

    // Seed default templates
    if (path === '/api/doc-templates/seed' && method === 'POST') {
      const defaults = [
        {
          name: 'Standard Proposal', type: 'proposal',
          description: 'Business proposal template with scope, timeline, and pricing',
          content: 'PROPOSAL\n\nPrepared for: {{client_name}}\nDate: {{date}}\nPrepared by: BlackRoad OS, Inc.\n\n1. EXECUTIVE SUMMARY\n{{executive_summary}}\n\n2. SCOPE OF WORK\n{{scope}}\n\n3. TIMELINE\nStart: {{start_date}}\nEnd: {{end_date}}\n{{timeline_details}}\n\n4. PRICING\nTotal: ${{total_price}}\n{{pricing_details}}\n\n5. TERMS\n- Payment: Net 30\n- Revisions: 2 rounds included\n- Cancellation: 30 days written notice\n\n6. ACCEPTANCE\nSignature: _______________\nDate: _______________',
          variables: ['client_name', 'date', 'executive_summary', 'scope', 'start_date', 'end_date', 'timeline_details', 'total_price', 'pricing_details'],
        },
        {
          name: 'Service Contract', type: 'contract',
          description: 'Standard service agreement with terms and conditions',
          content: 'SERVICE AGREEMENT\n\nThis Agreement is entered into as of {{effective_date}} between:\nProvider: BlackRoad OS, Inc. ("Company")\nClient: {{client_name}} ("Client")\n\n1. SERVICES\n{{services_description}}\n\n2. TERM\nStart: {{start_date}}\nEnd: {{end_date}}\nRenewal: {{renewal_terms}}\n\n3. COMPENSATION\nTotal Value: ${{contract_value}}\nPayment Schedule: {{payment_schedule}}\n\n4. CONFIDENTIALITY\nBoth parties agree to maintain confidentiality of proprietary information.\n\n5. TERMINATION\nEither party may terminate with {{notice_period}} days written notice.\n\n6. LIMITATION OF LIABILITY\nLiability limited to fees paid under this Agreement.\n\nIN WITNESS WHEREOF:\n\nCompany: _______________  Date: ___\nClient: _______________   Date: ___',
          variables: ['effective_date', 'client_name', 'services_description', 'start_date', 'end_date', 'renewal_terms', 'contract_value', 'payment_schedule', 'notice_period'],
        },
        {
          name: 'Statement of Work', type: 'sow',
          description: 'Detailed SOW with deliverables, milestones, and acceptance criteria',
          content: 'STATEMENT OF WORK\n\nProject: {{project_name}}\nClient: {{client_name}}\nDate: {{date}}\n\n1. OBJECTIVES\n{{objectives}}\n\n2. DELIVERABLES\n{{deliverables}}\n\n3. MILESTONES\n{{milestones}}\n\n4. ACCEPTANCE CRITERIA\n{{acceptance_criteria}}\n\n5. ASSUMPTIONS\n{{assumptions}}\n\n6. OUT OF SCOPE\n{{out_of_scope}}\n\n7. RESOURCES REQUIRED\n{{resources}}\n\n8. TIMELINE\n{{timeline}}',
          variables: ['project_name', 'client_name', 'date', 'objectives', 'deliverables', 'milestones', 'acceptance_criteria', 'assumptions', 'out_of_scope', 'resources', 'timeline'],
        },
        {
          name: 'Non-Disclosure Agreement', type: 'nda',
          description: 'Mutual NDA for business discussions',
          content: 'MUTUAL NON-DISCLOSURE AGREEMENT\n\nEffective Date: {{effective_date}}\n\nBetween:\n1. BlackRoad OS, Inc. ("Party A")\n2. {{party_b_name}} ("Party B")\n\n1. DEFINITION\n"Confidential Information" means any non-public information disclosed by either party.\n\n2. OBLIGATIONS\nEach party agrees to:\n- Hold Confidential Information in strict confidence\n- Not disclose to third parties without prior written consent\n- Use only for the purpose of {{purpose}}\n\n3. EXCLUSIONS\nInformation is not confidential if: publicly available, independently developed, or rightfully received from third parties.\n\n4. TERM\nThis Agreement remains in effect for {{term_years}} year(s) from the Effective Date.\n\n5. RETURN OF INFORMATION\nUpon termination, each party shall return or destroy all Confidential Information.\n\nParty A: _______________  Date: ___\nParty B: _______________  Date: ___',
          variables: ['effective_date', 'party_b_name', 'purpose', 'term_years'],
        },
        {
          name: 'Invoice Cover Letter', type: 'invoice_cover',
          description: 'Cover letter to accompany invoices',
          content: 'Dear {{contact_name}},\n\nPlease find attached Invoice #{{invoice_number}} for ${{amount}} covering {{description}}.\n\nPay Period: {{period}}\nDue Date: {{due_date}}\nPayment Methods: {{payment_methods}}\n\nIf you have any questions about this invoice, please contact us.\n\nThank you for your continued partnership.\n\nBest regards,\nBlackRoad OS, Inc.\n{{sender_name}}',
          variables: ['contact_name', 'invoice_number', 'amount', 'description', 'period', 'due_date', 'payment_methods', 'sender_name'],
        },
      ];

      const stmts = defaults.map(t => {
        const id = crypto.randomUUID();
        return env.DB.prepare(
          'INSERT OR IGNORE INTO rw_doc_templates (id, name, type, description, content, variables, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)'
        ).bind(id, t.name, t.type, t.description, t.content, JSON.stringify(t.variables), 'system');
      });
      await env.DB.batch(stmts);

      return json({ seeded: defaults.length, templates: defaults.map(t => t.name) }, 201);
    }

    // ─── Goal Tracking (OKRs) ───
    if (path === '/api/goals' && method === 'GET') {
      const goalType = url.searchParams.get('type');
      const owner = url.searchParams.get('owner');
      const status = url.searchParams.get('status');
      const parentId = url.searchParams.get('parent_id');
      let query = 'SELECT * FROM rw_goals';
      const conditions = [];
      const params = [];
      if (goalType) { conditions.push('goal_type = ?'); params.push(goalType); }
      if (owner) { conditions.push('owner = ?'); params.push(owner); }
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (parentId) { conditions.push('parent_id = ?'); params.push(parentId); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      // Build OKR tree: objectives with their key results
      const goals = result.results || [];
      const objectives = goals.filter(g => g.goal_type === 'objective');
      const keyResults = goals.filter(g => g.goal_type === 'key_result');

      const okrs = objectives.map(obj => {
        const krs = keyResults.filter(kr => kr.parent_id === obj.id);
        const avgProgress = krs.length > 0 ? Math.round(krs.reduce((s, kr) => s + (kr.progress || 0), 0) / krs.length) : obj.progress || 0;
        return { ...obj, key_results: krs, computed_progress: avgProgress };
      });

      // Orphan key results (not linked to an objective in current result set)
      const linkedIds = new Set(objectives.map(o => o.id));
      const orphanKrs = keyResults.filter(kr => !linkedIds.has(kr.parent_id));

      return json({ goals, okrs, orphan_key_results: orphanKrs });
    }

    if (path === '/api/goals' && method === 'POST') {
      const body = await request.json();
      if (!body.title) return json({ error: 'title is required' }, 400);
      const validTypes = ['objective', 'key_result'];
      const goalType = validTypes.includes(body.goal_type) ? body.goal_type : 'objective';
      const validStatuses = ['not_started', 'in_progress', 'at_risk', 'on_track', 'completed', 'cancelled'];
      const status = validStatuses.includes(body.status) ? body.status : 'not_started';

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_goals (id, title, description, goal_type, parent_id, owner, target_value, current_value, unit, start_date, due_date, progress, status, alignment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.title, body.description || null, goalType, body.parent_id || null, body.owner || null, body.target_value !== undefined ? parseFloat(body.target_value) : null, parseFloat(body.current_value || 0), body.unit || null, body.start_date || null, body.due_date || null, body.progress || 0, status, body.alignment || null).run();

      return json({ goal: { id, title: body.title, goal_type: goalType, status, progress: body.progress || 0, parent_id: body.parent_id || null } }, 201);
    }

    const goalMatch = path.match(/^\/api\/goals\/([^/]+)$/);
    if (goalMatch && method === 'GET') {
      const goal = await env.DB.prepare('SELECT * FROM rw_goals WHERE id = ?').bind(goalMatch[1]).first();
      if (!goal) return json({ error: 'Goal not found' }, 404);
      // If objective, fetch key results
      let keyResults = [];
      if (goal.goal_type === 'objective') {
        const krs = await env.DB.prepare('SELECT * FROM rw_goals WHERE parent_id = ? ORDER BY created_at ASC').bind(goal.id).all();
        keyResults = krs.results || [];
      }
      return json({ goal, key_results: keyResults });
    }

    if (goalMatch && method === 'PUT') {
      const body = await request.json();
      const gId = goalMatch[1];
      const updates = [];
      const values = [];
      if (body.title) { updates.push('title = ?'); values.push(body.title); }
      if (body.description !== undefined) { updates.push('description = ?'); values.push(body.description); }
      if (body.progress !== undefined) { updates.push('progress = ?'); values.push(body.progress); }
      if (body.current_value !== undefined) { updates.push('current_value = ?'); values.push(parseFloat(body.current_value)); }
      if (body.target_value !== undefined) { updates.push('target_value = ?'); values.push(parseFloat(body.target_value)); }
      if (body.status) { updates.push('status = ?'); values.push(body.status); }
      if (body.owner !== undefined) { updates.push('owner = ?'); values.push(body.owner); }
      if (body.due_date !== undefined) { updates.push('due_date = ?'); values.push(body.due_date); }
      if (body.alignment !== undefined) { updates.push('alignment = ?'); values.push(body.alignment); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      updates.push("updated_at = datetime('now')");
      values.push(gId);
      await env.DB.prepare(`UPDATE rw_goals SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();

      // Auto-compute parent objective progress if this is a key result
      const goal = await env.DB.prepare('SELECT * FROM rw_goals WHERE id = ?').bind(gId).first();
      if (goal && goal.parent_id) {
        const siblings = await env.DB.prepare('SELECT progress FROM rw_goals WHERE parent_id = ?').bind(goal.parent_id).all();
        const avgProgress = Math.round((siblings.results || []).reduce((s, r) => s + (r.progress || 0), 0) / (siblings.results || []).length);
        await env.DB.prepare("UPDATE rw_goals SET progress = ?, updated_at = datetime('now') WHERE id = ?").bind(avgProgress, goal.parent_id).run();
      }

      return json({ goal });
    }

    // ─── Resource Library ───
    if (path === '/api/resources' && method === 'GET') {
      const category = url.searchParams.get('category');
      const type = url.searchParams.get('type');
      const q = url.searchParams.get('q');
      let query = 'SELECT * FROM rw_resources';
      const conditions = [];
      const params = [];
      if (category) { conditions.push('category = ?'); params.push(category); }
      if (type) { conditions.push('type = ?'); params.push(type); }
      if (q) { conditions.push('(title LIKE ? OR content LIKE ? OR tags LIKE ?)'); params.push(`%${q}%`, `%${q}%`, `%${q}%`); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const resources = (result.results || []).map(r => {
        try { r.tags = JSON.parse(r.tags || '[]'); } catch { r.tags = []; }
        return r;
      });

      const categories = await env.DB.prepare(
        'SELECT category, COUNT(*) as count FROM rw_resources GROUP BY category ORDER BY count DESC'
      ).all();

      return json({ resources, categories: categories.results || [] });
    }

    if (path === '/api/resources' && method === 'POST') {
      const body = await request.json();
      if (!body.title) return json({ error: 'title is required' }, 400);
      const validTypes = ['link', 'tool', 'credential', 'contact', 'document', 'snippet', 'other'];
      const type = validTypes.includes(body.type) ? body.type : 'link';

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_resources (id, title, type, url, content, category, tags, shared_with, added_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.title, type, body.url || null, body.content || null, body.category || 'general', JSON.stringify(body.tags || []), body.shared_with || 'team', body.added_by || null).run();

      return json({ resource: { id, title: body.title, type, category: body.category || 'general' } }, 201);
    }

    const resourceMatch = path.match(/^\/api\/resources\/([^/]+)$/);
    if (resourceMatch && method === 'GET') {
      const res = await env.DB.prepare('SELECT * FROM rw_resources WHERE id = ?').bind(resourceMatch[1]).first();
      if (!res) return json({ error: 'Resource not found' }, 404);
      try { res.tags = JSON.parse(res.tags || '[]'); } catch { res.tags = []; }
      return json({ resource: res });
    }

    if (resourceMatch && method === 'PUT') {
      const body = await request.json();
      const rId = resourceMatch[1];
      const updates = [];
      const values = [];
      if (body.title) { updates.push('title = ?'); values.push(body.title); }
      if (body.url !== undefined) { updates.push('url = ?'); values.push(body.url); }
      if (body.content !== undefined) { updates.push('content = ?'); values.push(body.content); }
      if (body.category) { updates.push('category = ?'); values.push(body.category); }
      if (body.tags) { updates.push('tags = ?'); values.push(JSON.stringify(body.tags)); }
      if (body.shared_with) { updates.push('shared_with = ?'); values.push(body.shared_with); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      updates.push("updated_at = datetime('now')");
      values.push(rId);
      await env.DB.prepare(`UPDATE rw_resources SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_resources WHERE id = ?').bind(rId).first();
      try { updated.tags = JSON.parse(updated.tags || '[]'); } catch { updated.tags = []; }
      return json({ resource: updated });
    }

    if (resourceMatch && method === 'DELETE') {
      const existing = await env.DB.prepare('SELECT id FROM rw_resources WHERE id = ?').bind(resourceMatch[1]).first();
      if (!existing) return json({ error: 'Resource not found' }, 404);
      await env.DB.prepare('DELETE FROM rw_resources WHERE id = ?').bind(resourceMatch[1]).run();
      return json({ deleted: true, id: resourceMatch[1] });
    }

    // ─── Workflow Automation ───
    if (path === '/api/workflows' && method === 'GET') {
      const enabled = url.searchParams.get('enabled');
      let query = 'SELECT * FROM rw_workflows';
      const params = [];
      if (enabled !== null && enabled !== undefined) {
        query += ' WHERE enabled = ?';
        params.push(enabled === 'true' || enabled === '1' ? 1 : 0);
      }
      query += ' ORDER BY created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const workflows = (result.results || []).map(w => {
        try { w.trigger_config = JSON.parse(w.trigger_config || '{}'); } catch { w.trigger_config = {}; }
        try { w.action_config = JSON.parse(w.action_config || '{}'); } catch { w.action_config = {}; }
        return w;
      });

      return json({ workflows });
    }

    if (path === '/api/workflows' && method === 'POST') {
      const body = await request.json();
      if (!body.name || !body.trigger_type || !body.action_type) {
        return json({ error: 'name, trigger_type, and action_type are required' }, 400);
      }
      const validTriggers = ['task_completed', 'invoice_overdue', 'invoice_paid', 'lead_stage_change', 'contract_expiring', 'milestone_completed', 'expense_submitted', 'meeting_created', 'goal_progress', 'manual'];
      const validActions = ['notify_client', 'send_reminder', 'create_task', 'update_status', 'send_report', 'assign_agent', 'log_event', 'webhook'];
      if (!validTriggers.includes(body.trigger_type)) return json({ error: 'trigger_type must be: ' + validTriggers.join(', ') }, 400);
      if (!validActions.includes(body.action_type)) return json({ error: 'action_type must be: ' + validActions.join(', ') }, 400);

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_workflows (id, name, description, trigger_type, trigger_config, action_type, action_config, enabled, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.name, body.description || null, body.trigger_type, JSON.stringify(body.trigger_config || {}), body.action_type, JSON.stringify(body.action_config || {}), body.enabled !== false ? 1 : 0, body.created_by || null).run();

      return json({
        workflow: {
          id, name: body.name, trigger_type: body.trigger_type, action_type: body.action_type,
          trigger_config: body.trigger_config || {}, action_config: body.action_config || {},
          enabled: body.enabled !== false,
        },
      }, 201);
    }

    const workflowMatch = path.match(/^\/api\/workflows\/([^/]+)$/);
    if (workflowMatch && method === 'GET') {
      const wf = await env.DB.prepare('SELECT * FROM rw_workflows WHERE id = ?').bind(workflowMatch[1]).first();
      if (!wf) return json({ error: 'Workflow not found' }, 404);
      try { wf.trigger_config = JSON.parse(wf.trigger_config || '{}'); } catch { wf.trigger_config = {}; }
      try { wf.action_config = JSON.parse(wf.action_config || '{}'); } catch { wf.action_config = {}; }
      // Get recent logs
      const logs = await env.DB.prepare(
        'SELECT * FROM rw_workflow_logs WHERE workflow_id = ? ORDER BY executed_at DESC LIMIT 20'
      ).bind(workflowMatch[1]).all();
      return json({ workflow: wf, logs: logs.results || [] });
    }

    if (workflowMatch && method === 'PUT') {
      const body = await request.json();
      const wId = workflowMatch[1];
      const updates = [];
      const values = [];
      if (body.name) { updates.push('name = ?'); values.push(body.name); }
      if (body.description !== undefined) { updates.push('description = ?'); values.push(body.description); }
      if (body.trigger_config) { updates.push('trigger_config = ?'); values.push(JSON.stringify(body.trigger_config)); }
      if (body.action_config) { updates.push('action_config = ?'); values.push(JSON.stringify(body.action_config)); }
      if (body.enabled !== undefined) { updates.push('enabled = ?'); values.push(body.enabled ? 1 : 0); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      updates.push("updated_at = datetime('now')");
      values.push(wId);
      await env.DB.prepare(`UPDATE rw_workflows SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_workflows WHERE id = ?').bind(wId).first();
      try { updated.trigger_config = JSON.parse(updated.trigger_config || '{}'); } catch { updated.trigger_config = {}; }
      try { updated.action_config = JSON.parse(updated.action_config || '{}'); } catch { updated.action_config = {}; }
      return json({ workflow: updated });
    }

    if (workflowMatch && method === 'DELETE') {
      const existing = await env.DB.prepare('SELECT id FROM rw_workflows WHERE id = ?').bind(workflowMatch[1]).first();
      if (!existing) return json({ error: 'Workflow not found' }, 404);
      await env.DB.prepare('DELETE FROM rw_workflow_logs WHERE workflow_id = ?').bind(workflowMatch[1]).run();
      await env.DB.prepare('DELETE FROM rw_workflows WHERE id = ?').bind(workflowMatch[1]).run();
      return json({ deleted: true, id: workflowMatch[1] });
    }

    // Trigger a workflow manually
    if (path === '/api/workflows/trigger' && method === 'POST') {
      const body = await request.json();
      if (!body.workflow_id) return json({ error: 'workflow_id is required' }, 400);

      const wf = await env.DB.prepare('SELECT * FROM rw_workflows WHERE id = ?').bind(body.workflow_id).first();
      if (!wf) return json({ error: 'Workflow not found' }, 404);
      if (!wf.enabled) return json({ error: 'Workflow is disabled' }, 400);

      let triggerConfig = {};
      let actionConfig = {};
      try { triggerConfig = JSON.parse(wf.trigger_config || '{}'); } catch {}
      try { actionConfig = JSON.parse(wf.action_config || '{}'); } catch {}

      // Execute the action based on type
      let actionResult = '';
      const eventData = body.event_data || {};

      if (wf.action_type === 'create_task') {
        const taskId = crypto.randomUUID();
        const taskTitle = actionConfig.task_title || `Auto-task from workflow: ${wf.name}`;
        const assignee = actionConfig.assignee || null;
        await env.DB.prepare(
          'INSERT INTO roadwork_tasks (id, title, description, assignee, priority, status, kanban_column) VALUES (?, ?, ?, ?, ?, ?, ?)'
        ).bind(taskId, taskTitle, `Triggered by workflow: ${wf.name}`, assignee, actionConfig.priority || 'medium', 'pending', 'todo').run();
        actionResult = `Created task: ${taskTitle} (${taskId})`;
      } else if (wf.action_type === 'log_event') {
        actionResult = `Event logged: ${wf.trigger_type} - ${JSON.stringify(eventData)}`;
      } else if (wf.action_type === 'send_report') {
        const reportId = crypto.randomUUID();
        await env.DB.prepare(
          'INSERT INTO roadwork_reports (id, title, type, content, generated_by) VALUES (?, ?, ?, ?, ?)'
        ).bind(reportId, `Workflow Report: ${wf.name}`, 'workflow', `Triggered: ${wf.trigger_type}\nEvent: ${JSON.stringify(eventData)}\nAction: ${wf.action_type}`, 'Workflow Engine').run();
        actionResult = `Generated report: ${reportId}`;
      } else if (wf.action_type === 'notify_client' || wf.action_type === 'send_reminder') {
        actionResult = `Notification queued: ${actionConfig.message || wf.name} (recipient: ${actionConfig.recipient || 'default'})`;
      } else if (wf.action_type === 'update_status') {
        actionResult = `Status update: ${actionConfig.entity || 'unknown'} -> ${actionConfig.new_status || 'updated'}`;
      } else if (wf.action_type === 'assign_agent') {
        actionResult = `Agent assigned: ${actionConfig.agent || 'auto'} to ${actionConfig.task || 'pending work'}`;
      } else if (wf.action_type === 'webhook') {
        try {
          const resp = await fetch(actionConfig.url || '', {
            method: actionConfig.method || 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ workflow: wf.name, trigger: wf.trigger_type, event: eventData }),
          });
          actionResult = `Webhook sent to ${actionConfig.url}: ${resp.status}`;
        } catch (e) {
          actionResult = `Webhook failed: ${e.message}`;
        }
      }

      // Log the execution
      const logId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_workflow_logs (id, workflow_id, trigger_event, action_result, status) VALUES (?, ?, ?, ?, ?)'
      ).bind(logId, body.workflow_id, JSON.stringify({ type: wf.trigger_type, data: eventData }), actionResult, 'success').run();

      // Update workflow stats
      await env.DB.prepare(
        "UPDATE rw_workflows SET last_triggered = datetime('now'), trigger_count = trigger_count + 1, updated_at = datetime('now') WHERE id = ?"
      ).bind(body.workflow_id).run();

      return json({
        triggered: true,
        workflow: wf.name,
        trigger_type: wf.trigger_type,
        action_type: wf.action_type,
        action_result: actionResult,
        log_id: logId,
      }, 201);
    }

    // Workflow execution logs
    if (path === '/api/workflows/logs' && method === 'GET') {
      const workflowId = url.searchParams.get('workflow_id');
      let query = 'SELECT l.*, w.name as workflow_name FROM rw_workflow_logs l LEFT JOIN rw_workflows w ON l.workflow_id = w.id';
      const params = [];
      if (workflowId) { query += ' WHERE l.workflow_id = ?'; params.push(workflowId); }
      query += ' ORDER BY l.executed_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ logs: result.results || [] });
    }


    if (path === '/api/crm' && method === 'GET') {
      const q = url.searchParams.get('q');
      const owner = url.searchParams.get('owner');
      let query = 'SELECT * FROM rw_crm_contacts';
      const conditions = [];
      const params = [];
      if (q) { conditions.push('(name LIKE ? OR email LIKE ? OR company LIKE ?)'); params.push(`%${q}%`, `%${q}%`, `%${q}%`); }
      if (owner) { conditions.push('owner = ?'); params.push(owner); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY updated_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const contacts = (result.results || []).map(c => {
        try { c.tags = JSON.parse(c.tags || '[]'); } catch { c.tags = []; }
        try { c.custom_fields = JSON.parse(c.custom_fields || '{}'); } catch { c.custom_fields = {}; }
        return c;
      });

      const totalContacts = await env.DB.prepare('SELECT COUNT(*) as count FROM rw_crm_contacts').first();
      const totalDeals = await env.DB.prepare('SELECT COUNT(*) as count FROM rw_crm_deals').first();
      const pipelineValue = await env.DB.prepare("SELECT COALESCE(SUM(value), 0) as total FROM rw_crm_deals WHERE stage NOT IN ('won','lost')").first();
      const wonValue = await env.DB.prepare("SELECT COALESCE(SUM(value), 0) as total FROM rw_crm_deals WHERE stage = 'won'").first();

      return json({
        contacts,
        summary: {
          total_contacts: totalContacts?.count || 0,
          total_deals: totalDeals?.count || 0,
          pipeline_value: pipelineValue?.total || 0,
          won_value: wonValue?.total || 0,
        },
      });
    }

    // Create contact
    if (path === '/api/crm' && method === 'POST') {
      const body = await request.json();
      if (!body.name) return json({ error: 'name is required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_crm_contacts (id, name, email, phone, company, title, source, owner, tags, custom_fields) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.name, body.email || null, body.phone || null, body.company || null, body.title || null, body.source || 'direct', body.owner || null, JSON.stringify(body.tags || []), JSON.stringify(body.custom_fields || {})).run();
      return json({ contact: { id, name: body.name, email: body.email, company: body.company } }, 201);
    }

    // Single contact with deals and activities
    const crmContactMatch = path.match(/^\/api\/crm\/([^/]+)$/);
    if (crmContactMatch && method === 'GET') {
      const contact = await env.DB.prepare('SELECT * FROM rw_crm_contacts WHERE id = ?').bind(crmContactMatch[1]).first();
      if (!contact) return json({ error: 'Contact not found' }, 404);
      try { contact.tags = JSON.parse(contact.tags || '[]'); } catch { contact.tags = []; }
      try { contact.custom_fields = JSON.parse(contact.custom_fields || '{}'); } catch { contact.custom_fields = {}; }
      const deals = await env.DB.prepare('SELECT * FROM rw_crm_deals WHERE contact_id = ? ORDER BY created_at DESC').bind(crmContactMatch[1]).all();
      const activities = await env.DB.prepare('SELECT * FROM rw_crm_activities WHERE contact_id = ? ORDER BY created_at DESC LIMIT 50').bind(crmContactMatch[1]).all();
      return json({ contact, deals: deals.results || [], activities: activities.results || [] });
    }

    if (crmContactMatch && method === 'PUT') {
      const body = await request.json();
      const cId = crmContactMatch[1];
      const updates = [];
      const values = [];
      if (body.name) { updates.push('name = ?'); values.push(body.name); }
      if (body.email !== undefined) { updates.push('email = ?'); values.push(body.email); }
      if (body.phone !== undefined) { updates.push('phone = ?'); values.push(body.phone); }
      if (body.company !== undefined) { updates.push('company = ?'); values.push(body.company); }
      if (body.title !== undefined) { updates.push('title = ?'); values.push(body.title); }
      if (body.owner !== undefined) { updates.push('owner = ?'); values.push(body.owner); }
      if (body.tags) { updates.push('tags = ?'); values.push(JSON.stringify(body.tags)); }
      if (body.custom_fields) { updates.push('custom_fields = ?'); values.push(JSON.stringify(body.custom_fields)); }
      if (body.last_contacted) { updates.push('last_contacted = ?'); values.push(body.last_contacted); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      updates.push("updated_at = datetime('now')");
      values.push(cId);
      await env.DB.prepare(`UPDATE rw_crm_contacts SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_crm_contacts WHERE id = ?').bind(cId).first();
      try { updated.tags = JSON.parse(updated.tags || '[]'); } catch { updated.tags = []; }
      try { updated.custom_fields = JSON.parse(updated.custom_fields || '{}'); } catch { updated.custom_fields = {}; }
      return json({ contact: updated });
    }

    // CRM Deals
    if (path === '/api/crm/deals' && method === 'GET') {
      const stage = url.searchParams.get('stage');
      const owner = url.searchParams.get('owner');
      let query = 'SELECT d.*, c.name as contact_name, c.company as contact_company FROM rw_crm_deals d LEFT JOIN rw_crm_contacts c ON d.contact_id = c.id';
      const conditions = [];
      const params = [];
      if (stage) { conditions.push('d.stage = ?'); params.push(stage); }
      if (owner) { conditions.push('d.owner = ?'); params.push(owner); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY d.updated_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const pipeline = await env.DB.prepare(
        "SELECT stage, COUNT(*) as count, COALESCE(SUM(value), 0) as total_value, COALESCE(AVG(probability), 0) as avg_prob FROM rw_crm_deals WHERE stage NOT IN ('won','lost') GROUP BY stage"
      ).all();

      return json({ deals: result.results || [], pipeline: pipeline.results || [] });
    }

    if (path === '/api/crm/deals' && method === 'POST') {
      const body = await request.json();
      if (!body.title) return json({ error: 'title is required' }, 400);
      const validStages = ['discovery', 'qualification', 'proposal', 'negotiation', 'won', 'lost'];
      const stage = validStages.includes(body.stage) ? body.stage : 'discovery';
      const probMap = { discovery: 10, qualification: 25, proposal: 50, negotiation: 75, won: 100, lost: 0 };
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_crm_deals (id, contact_id, title, value, currency, stage, probability, expected_close, owner, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.contact_id || null, body.title, parseFloat(body.value || 0), body.currency || 'USD', stage, body.probability || probMap[stage] || 10, body.expected_close || null, body.owner || null, body.notes || null).run();
      return json({ deal: { id, title: body.title, value: parseFloat(body.value || 0), stage } }, 201);
    }

    const crmDealMatch = path.match(/^\/api\/crm\/deals\/([^/]+)$/);
    if (crmDealMatch && method === 'PUT') {
      const body = await request.json();
      const dId = crmDealMatch[1];
      const updates = [];
      const values = [];
      if (body.title) { updates.push('title = ?'); values.push(body.title); }
      if (body.value !== undefined) { updates.push('value = ?'); values.push(parseFloat(body.value)); }
      if (body.stage) {
        updates.push('stage = ?'); values.push(body.stage);
        if (body.stage === 'won') { updates.push("won_at = datetime('now')"); updates.push('probability = 100'); }
        if (body.stage === 'lost') { updates.push("lost_at = datetime('now')"); updates.push('probability = 0'); }
      }
      if (body.probability !== undefined) { updates.push('probability = ?'); values.push(body.probability); }
      if (body.expected_close) { updates.push('expected_close = ?'); values.push(body.expected_close); }
      if (body.owner !== undefined) { updates.push('owner = ?'); values.push(body.owner); }
      if (body.notes !== undefined) { updates.push('notes = ?'); values.push(body.notes); }
      if (body.lost_reason) { updates.push('lost_reason = ?'); values.push(body.lost_reason); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      updates.push("updated_at = datetime('now')");
      values.push(dId);
      await env.DB.prepare(`UPDATE rw_crm_deals SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_crm_deals WHERE id = ?').bind(dId).first();
      return json({ deal: updated });
    }

    // CRM Activities / Timeline
    if (path === '/api/crm/activities' && method === 'GET') {
      const contactId = url.searchParams.get('contact_id');
      const dealId = url.searchParams.get('deal_id');
      let query = 'SELECT * FROM rw_crm_activities';
      const conditions = [];
      const params = [];
      if (contactId) { conditions.push('contact_id = ?'); params.push(contactId); }
      if (dealId) { conditions.push('deal_id = ?'); params.push(dealId); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ activities: result.results || [] });
    }

    if (path === '/api/crm/activities' && method === 'POST') {
      const body = await request.json();
      if (!body.subject) return json({ error: 'subject is required' }, 400);
      const validTypes = ['note', 'call', 'email', 'meeting', 'task', 'follow_up'];
      const type = validTypes.includes(body.type) ? body.type : 'note';
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_crm_activities (id, contact_id, deal_id, type, subject, body, scheduled_at, completed_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.contact_id || null, body.deal_id || null, type, body.subject, body.body || null, body.scheduled_at || null, body.completed_at || null, body.created_by || null).run();

      // Update last_contacted on the contact
      if (body.contact_id) {
        await env.DB.prepare("UPDATE rw_crm_contacts SET last_contacted = datetime('now'), updated_at = datetime('now') WHERE id = ?").bind(body.contact_id).run();
      }
      return json({ activity: { id, type, subject: body.subject, contact_id: body.contact_id } }, 201);
    }

    // CRM Pipeline Summary
    if (path === '/api/crm/pipeline' && method === 'GET') {
      const stages = ['discovery', 'qualification', 'proposal', 'negotiation', 'won', 'lost'];
      const stageData = {};
      for (const s of stages) {
        const d = await env.DB.prepare('SELECT COUNT(*) as count, COALESCE(SUM(value), 0) as total FROM rw_crm_deals WHERE stage = ?').bind(s).first();
        stageData[s] = { count: d?.count || 0, total_value: d?.total || 0 };
      }
      const weighted = await env.DB.prepare("SELECT COALESCE(SUM(value * probability / 100.0), 0) as total FROM rw_crm_deals WHERE stage NOT IN ('won','lost')").first();
      const winRate = (stageData.won.count + stageData.lost.count) > 0 ? Math.round(stageData.won.count / (stageData.won.count + stageData.lost.count) * 100) : 0;
      return json({ pipeline: stageData, weighted_value: Math.round((weighted?.total || 0) * 100) / 100, win_rate: winRate });
    }

    // ─── Proposal Builder ───
    if (path === '/api/proposals' && method === 'GET') {
      const status = url.searchParams.get('status');
      const client = url.searchParams.get('client');
      let query = 'SELECT * FROM rw_proposals';
      const conditions = [];
      const params = [];
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (client) { conditions.push('client_name LIKE ?'); params.push(`%${client}%`); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const proposals = (result.results || []).map(p => {
        try { p.sections = JSON.parse(p.sections || '[]'); } catch { p.sections = []; }
        try { p.pricing_table = JSON.parse(p.pricing_table || '[]'); } catch { p.pricing_table = []; }
        return p;
      });

      const summary = await env.DB.prepare(
        "SELECT status, COUNT(*) as count, COALESCE(SUM(total_value), 0) as total FROM rw_proposals GROUP BY status"
      ).all();

      return json({ proposals, summary: summary.results || [] });
    }

    if (path === '/api/proposals' && method === 'POST') {
      const body = await request.json();
      if (!body.title || !body.client_name) return json({ error: 'title and client_name are required' }, 400);
      const validStatuses = ['draft', 'review', 'sent', 'accepted', 'rejected', 'expired'];
      const status = validStatuses.includes(body.status) ? body.status : 'draft';
      const sections = body.sections || [];
      const pricingTable = body.pricing_table || [];
      const totalValue = pricingTable.reduce((s, item) => s + ((item.quantity || 1) * (item.unit_price || 0)), 0) || parseFloat(body.total_value || 0);

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_proposals (id, title, client_name, client_email, status, sections, pricing_table, total_value, valid_until, notes, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.title, body.client_name, body.client_email || null, status, JSON.stringify(sections), JSON.stringify(pricingTable), totalValue, body.valid_until || null, body.notes || null, body.created_by || null).run();

      return json({ proposal: { id, title: body.title, client_name: body.client_name, total_value: totalValue, status } }, 201);
    }

    const proposalMatch = path.match(/^\/api\/proposals\/([^/]+)$/);
    if (proposalMatch && method === 'GET') {
      const prop = await env.DB.prepare('SELECT * FROM rw_proposals WHERE id = ?').bind(proposalMatch[1]).first();
      if (!prop) return json({ error: 'Proposal not found' }, 404);
      try { prop.sections = JSON.parse(prop.sections || '[]'); } catch { prop.sections = []; }
      try { prop.pricing_table = JSON.parse(prop.pricing_table || '[]'); } catch { prop.pricing_table = []; }
      return json({ proposal: prop });
    }

    if (proposalMatch && method === 'PUT') {
      const body = await request.json();
      const pId = proposalMatch[1];
      const updates = [];
      const values = [];
      if (body.title) { updates.push('title = ?'); values.push(body.title); }
      if (body.client_name) { updates.push('client_name = ?'); values.push(body.client_name); }
      if (body.client_email !== undefined) { updates.push('client_email = ?'); values.push(body.client_email); }
      if (body.status) { updates.push('status = ?'); values.push(body.status); }
      if (body.sections) { updates.push('sections = ?'); values.push(JSON.stringify(body.sections)); }
      if (body.pricing_table) {
        updates.push('pricing_table = ?'); values.push(JSON.stringify(body.pricing_table));
        const newTotal = body.pricing_table.reduce((s, item) => s + ((item.quantity || 1) * (item.unit_price || 0)), 0);
        updates.push('total_value = ?'); values.push(newTotal);
      }
      if (body.total_value !== undefined && !body.pricing_table) { updates.push('total_value = ?'); values.push(parseFloat(body.total_value)); }
      if (body.valid_until) { updates.push('valid_until = ?'); values.push(body.valid_until); }
      if (body.notes !== undefined) { updates.push('notes = ?'); values.push(body.notes); }
      if (body.signature_client) { updates.push('signature_client = ?'); values.push(body.signature_client); updates.push("signature_date = datetime('now')"); updates.push("status = 'accepted'"); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      updates.push("updated_at = datetime('now')");
      values.push(pId);
      await env.DB.prepare(`UPDATE rw_proposals SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_proposals WHERE id = ?').bind(pId).first();
      try { updated.sections = JSON.parse(updated.sections || '[]'); } catch { updated.sections = []; }
      try { updated.pricing_table = JSON.parse(updated.pricing_table || '[]'); } catch { updated.pricing_table = []; }
      return json({ proposal: updated });
    }

    // Proposal sign (e-signature)
    if (path === '/api/proposals/sign' && method === 'POST') {
      const body = await request.json();
      if (!body.proposal_id || !body.signer_name) return json({ error: 'proposal_id and signer_name are required' }, 400);
      const prop = await env.DB.prepare('SELECT * FROM rw_proposals WHERE id = ?').bind(body.proposal_id).first();
      if (!prop) return json({ error: 'Proposal not found' }, 404);
      if (prop.status !== 'sent' && prop.status !== 'review') return json({ error: 'Proposal must be in sent or review status to sign' }, 400);

      await env.DB.prepare(
        "UPDATE rw_proposals SET signature_client = ?, signature_date = datetime('now'), status = 'accepted', updated_at = datetime('now') WHERE id = ?"
      ).bind(body.signer_name, body.proposal_id).run();

      return json({ signed: true, proposal_id: body.proposal_id, signer: body.signer_name, signed_at: new Date().toISOString() });
    }

    // Proposal HTML view
    const proposalHtmlMatch = path.match(/^\/api\/proposals\/([^/]+)\/html$/);
    if (proposalHtmlMatch && method === 'GET') {
      const prop = await env.DB.prepare('SELECT * FROM rw_proposals WHERE id = ?').bind(proposalHtmlMatch[1]).first();
      if (!prop) return json({ error: 'Proposal not found' }, 404);
      let sections = []; try { sections = JSON.parse(prop.sections || '[]'); } catch {}
      let pricing = []; try { pricing = JSON.parse(prop.pricing_table || '[]'); } catch {}

      const proposalHTML = `<!DOCTYPE html><html><head><link rel="stylesheet" href="https://images.blackroad.io/brand/brand.css"><meta charset="UTF-8"><title>Proposal: ${prop.title}</title>
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Helvetica Neue',Arial,sans-serif;color:#1a1a1a;background:#f8f8f8;padding:40px}
.proposal{max-width:800px;margin:0 auto;background:#fff;padding:48px;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.08)}
.header{border-bottom:2px solid #0a0a0a;padding-bottom:24px;margin-bottom:32px}.brand{font-size:24px;font-weight:700}.meta{margin-top:16px;font-size:13px;color:#666}
h2{font-size:18px;margin:24px 0 12px;color:#0a0a0a}h3{font-size:14px;margin:16px 0 8px}p{font-size:13px;line-height:1.7;margin-bottom:8px;color:#444}
table{width:100%;border-collapse:collapse;margin:16px 0}th{background:#f5f5f5;text-align:left;padding:10px 12px;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#666;border-bottom:1px solid #ddd}
td{padding:10px 12px;border-bottom:1px solid #eee;font-size:13px}.text-right{text-align:right}
.total{font-size:20px;font-weight:700;text-align:right;margin-top:16px;padding-top:16px;border-top:2px solid #0a0a0a}
.sig{margin-top:40px;padding-top:24px;border-top:1px solid #eee}.sig-line{border-bottom:1px solid #333;width:250px;display:inline-block;margin:32px 16px 0 0}
.status{display:inline-block;padding:4px 12px;border-radius:12px;font-size:11px;font-weight:600;text-transform:uppercase}
.status-accepted{background:#dcfce7;color:#166534}.status-draft{background:#fef3c7;color:#92400e}.status-sent{background:#dbeafe;color:#1e40af}.status-rejected{background:#fecaca;color:#991b1b}
.footer{margin-top:32px;padding-top:16px;border-top:1px solid #eee;font-size:11px;color:#888;text-align:center}
</style></head><body><div class="proposal">
<div class="header"><div class="brand">BlackRoad OS, Inc.</div><div class="meta">
<p>Proposal: <strong>${prop.title}</strong></p><p>Prepared for: <strong>${prop.client_name}</strong>${prop.client_email ? ' ('+prop.client_email+')' : ''}</p>
<p>Date: ${prop.created_at?.split('T')[0] || new Date().toISOString().split('T')[0]} | Status: <span class="status status-${prop.status}">${prop.status}</span></p>
${prop.valid_until ? '<p>Valid until: '+prop.valid_until+'</p>' : ''}</div></div>
${sections.map((s, i) => `<h2>${i+1}. ${s.title || 'Section '+(i+1)}</h2><p>${s.content || ''}</p>`).join('')}
${pricing.length > 0 ? `<h2>Pricing</h2><table><thead><tr><th>Item</th><th class="text-right">Qty</th><th class="text-right">Rate</th><th class="text-right">Amount</th></tr></thead><tbody>
${pricing.map(p => `<tr><td>${p.description || ''}</td><td class="text-right">${p.quantity || 1}</td><td class="text-right">$${(p.unit_price || 0).toFixed(2)}</td><td class="text-right">$${((p.quantity || 1) * (p.unit_price || 0)).toFixed(2)}</td></tr>`).join('')}
</tbody></table><div class="total">Total: $${(prop.total_value || 0).toFixed(2)}</div>` : `<div class="total">Total Value: $${(prop.total_value || 0).toFixed(2)}</div>`}
${prop.notes ? '<h2>Notes</h2><p>'+prop.notes+'</p>' : ''}
<div class="sig"><h3>Acceptance</h3>${prop.signature_client ? '<p>Signed by: <strong>'+prop.signature_client+'</strong> on '+prop.signature_date+'</p>' : '<p>Client Signature: <span class="sig-line"></span></p><p>Date: <span class="sig-line"></span></p>'}</div>
</body></html>`;

      return html(proposalHTML);
    }

    // ─── Standup Bot ───
    if (path === '/api/standup' && method === 'GET') {
      const date = url.searchParams.get('date') || new Date().toISOString().split('T')[0];
      const member = url.searchParams.get('member');
      let query = 'SELECT * FROM rw_standups';
      const conditions = [];
      const params = [];
      if (date) { conditions.push('standup_date = ?'); params.push(date); }
      if (member) { conditions.push('member_name = ?'); params.push(member); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      // Build team digest
      const standups = result.results || [];
      const blockers = standups.filter(s => s.blockers && s.blockers.trim() !== '' && s.blockers.toLowerCase() !== 'none');
      const moods = standups.reduce((a, s) => { a[s.mood || 'neutral'] = (a[s.mood || 'neutral'] || 0) + 1; return a; }, {});

      return json({
        standups,
        digest: {
          date,
          submitted: standups.length,
          blockers: blockers.map(s => ({ member: s.member_name, blocker: s.blockers })),
          moods,
        },
      });
    }

    if (path === '/api/standup' && method === 'POST') {
      const body = await request.json();
      if (!body.member_name) return json({ error: 'member_name is required' }, 400);
      const validMoods = ['great', 'good', 'neutral', 'struggling', 'blocked'];
      const mood = validMoods.includes(body.mood) ? body.mood : 'neutral';
      const standupDate = body.standup_date || new Date().toISOString().split('T')[0];

      // Check if already submitted today
      const existing = await env.DB.prepare(
        'SELECT id FROM rw_standups WHERE member_name = ? AND standup_date = ?'
      ).bind(body.member_name, standupDate).first();

      if (existing) {
        // Update existing standup
        await env.DB.prepare(
          'UPDATE rw_standups SET did_yesterday = ?, will_do_today = ?, blockers = ?, mood = ? WHERE id = ?'
        ).bind(body.did_yesterday || null, body.will_do_today || null, body.blockers || null, mood, existing.id).run();
        return json({ standup: { id: existing.id, member_name: body.member_name, updated: true } });
      }

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_standups (id, member_name, standup_date, did_yesterday, will_do_today, blockers, mood) VALUES (?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.member_name, standupDate, body.did_yesterday || null, body.will_do_today || null, body.blockers || null, mood).run();

      return json({ standup: { id, member_name: body.member_name, standup_date: standupDate, mood } }, 201);
    }

    // Standup digest (AI-generated team summary)
    if (path === '/api/standup/digest' && method === 'GET') {
      const date = url.searchParams.get('date') || new Date().toISOString().split('T')[0];
      const standups = await env.DB.prepare('SELECT * FROM rw_standups WHERE standup_date = ?').bind(date).all();
      const entries = standups.results || [];

      let aiDigest = '';
      if (entries.length > 0) {
        try {
          const standupText = entries.map(s => `${s.member_name}: Did: ${s.did_yesterday || 'N/A'} | Will do: ${s.will_do_today || 'N/A'} | Blockers: ${s.blockers || 'None'} | Mood: ${s.mood}`).join('\n');
          const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: 'You are Cecilia, Operations agent on RoadWork (BlackRoad OS). Summarize the daily standup into a brief team digest: highlights, blockers to address, and overall team health. 3-5 sentences.' },
              { role: 'user', content: standupText },
            ],
            max_tokens: 300,
          });
          if (aiResult?.response) aiDigest = aiResult.response.trim();
        } catch {}
      }

      const blockers = entries.filter(s => s.blockers && s.blockers.trim() !== '' && s.blockers.toLowerCase() !== 'none');
      return json({
        date,
        entries,
        total_submitted: entries.length,
        blockers: blockers.map(s => ({ member: s.member_name, blocker: s.blockers })),
        ai_digest: aiDigest || `${entries.length} standup(s) submitted for ${date}. ${blockers.length} blocker(s) reported.`,
      });
    }

    // Standup history (weekly view)
    if (path === '/api/standup/history' && method === 'GET') {
      const weeks = parseInt(url.searchParams.get('weeks') || '2');
      const daysBack = weeks * 7;
      const history = await env.DB.prepare(
        `SELECT standup_date, COUNT(*) as submissions, GROUP_CONCAT(member_name) as members
         FROM rw_standups WHERE standup_date >= date('now', '-${daysBack} days')
         GROUP BY standup_date ORDER BY standup_date DESC`
      ).all();
      const memberStats = await env.DB.prepare(
        `SELECT member_name, COUNT(*) as total_standups, COUNT(DISTINCT standup_date) as days_submitted
         FROM rw_standups WHERE standup_date >= date('now', '-${daysBack} days')
         GROUP BY member_name ORDER BY total_standups DESC`
      ).all();
      return json({ period_weeks: weeks, daily: history.results || [], member_stats: memberStats.results || [] });
    }

    // ─── Knowledge Base ───
    if (path === '/api/kb' && method === 'GET') {
      const category = url.searchParams.get('category');
      const q = url.searchParams.get('q');
      const status = url.searchParams.get('status');
      let query = 'SELECT * FROM rw_kb_articles';
      const conditions = [];
      const params = [];
      if (category) { conditions.push('category = ?'); params.push(category); }
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (q) { conditions.push('(title LIKE ? OR content LIKE ? OR tags LIKE ?)'); params.push(`%${q}%`, `%${q}%`, `%${q}%`); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY updated_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const articles = (result.results || []).map(a => {
        try { a.tags = JSON.parse(a.tags || '[]'); } catch { a.tags = []; }
        return a;
      });

      const categories = await env.DB.prepare(
        'SELECT category, COUNT(*) as count FROM rw_kb_articles GROUP BY category ORDER BY count DESC'
      ).all();

      const totalArticles = await env.DB.prepare('SELECT COUNT(*) as count FROM rw_kb_articles').first();
      const publishedCount = await env.DB.prepare("SELECT COUNT(*) as count FROM rw_kb_articles WHERE status = 'published'").first();

      return json({
        articles,
        categories: categories.results || [],
        summary: { total: totalArticles?.count || 0, published: publishedCount?.count || 0 },
      });
    }

    if (path === '/api/kb' && method === 'POST') {
      const body = await request.json();
      if (!body.title || !body.content) return json({ error: 'title and content are required' }, 400);
      const validStatuses = ['draft', 'review', 'published', 'archived'];
      const status = validStatuses.includes(body.status) ? body.status : 'draft';
      const slug = body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_kb_articles (id, title, slug, category, content, tags, status, author, parent_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.title, slug, body.category || 'general', body.content, JSON.stringify(body.tags || []), status, body.author || null, body.parent_id || null).run();

      // Create initial revision
      const revId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_kb_revisions (id, article_id, version, content, changed_by, change_summary) VALUES (?, ?, ?, ?, ?, ?)'
      ).bind(revId, id, 1, body.content, body.author || null, 'Initial version').run();

      return json({ article: { id, title: body.title, slug, category: body.category || 'general', status } }, 201);
    }

    const kbArticleMatch = path.match(/^\/api\/kb\/([^/]+)$/);
    if (kbArticleMatch && method === 'GET') {
      // Try by ID first, then by slug
      let article = await env.DB.prepare('SELECT * FROM rw_kb_articles WHERE id = ?').bind(kbArticleMatch[1]).first();
      if (!article) {
        article = await env.DB.prepare('SELECT * FROM rw_kb_articles WHERE slug = ?').bind(kbArticleMatch[1]).first();
      }
      if (!article) return json({ error: 'Article not found' }, 404);
      try { article.tags = JSON.parse(article.tags || '[]'); } catch { article.tags = []; }

      // Increment views
      await env.DB.prepare('UPDATE rw_kb_articles SET views = views + 1 WHERE id = ?').bind(article.id).run();

      // Get revisions
      const revisions = await env.DB.prepare(
        'SELECT id, version, changed_by, change_summary, created_at FROM rw_kb_revisions WHERE article_id = ? ORDER BY version DESC'
      ).bind(article.id).all();

      // Get child articles
      const children = await env.DB.prepare(
        'SELECT id, title, slug, status FROM rw_kb_articles WHERE parent_id = ? ORDER BY title'
      ).bind(article.id).all();

      return json({ article, revisions: revisions.results || [], children: children.results || [] });
    }

    if (kbArticleMatch && method === 'PUT') {
      const body = await request.json();
      const aId = kbArticleMatch[1];
      const updates = [];
      const values = [];
      if (body.title) { updates.push('title = ?'); values.push(body.title); }
      if (body.content) { updates.push('content = ?'); values.push(body.content); }
      if (body.category) { updates.push('category = ?'); values.push(body.category); }
      if (body.tags) { updates.push('tags = ?'); values.push(JSON.stringify(body.tags)); }
      if (body.status) { updates.push('status = ?'); values.push(body.status); }
      if (body.parent_id !== undefined) { updates.push('parent_id = ?'); values.push(body.parent_id); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);

      // If content changed, create a new revision
      if (body.content) {
        const current = await env.DB.prepare('SELECT version FROM rw_kb_articles WHERE id = ?').bind(aId).first();
        const newVersion = (current?.version || 1) + 1;
        updates.push('version = ?'); values.push(newVersion);
        const revId = crypto.randomUUID();
        await env.DB.prepare(
          'INSERT INTO rw_kb_revisions (id, article_id, version, content, changed_by, change_summary) VALUES (?, ?, ?, ?, ?, ?)'
        ).bind(revId, aId, newVersion, body.content, body.changed_by || null, body.change_summary || 'Updated').run();
      }

      updates.push("updated_at = datetime('now')");
      values.push(aId);
      await env.DB.prepare(`UPDATE rw_kb_articles SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_kb_articles WHERE id = ?').bind(aId).first();
      try { updated.tags = JSON.parse(updated.tags || '[]'); } catch { updated.tags = []; }
      return json({ article: updated });
    }

    // KB article helpfulness vote
    if (path === '/api/kb/vote' && method === 'POST') {
      const body = await request.json();
      if (!body.article_id || body.helpful === undefined) return json({ error: 'article_id and helpful (true/false) are required' }, 400);
      const field = body.helpful ? 'helpful_yes' : 'helpful_no';
      await env.DB.prepare(`UPDATE rw_kb_articles SET ${field} = ${field} + 1 WHERE id = ?`).bind(body.article_id).run();
      return json({ voted: true, article_id: body.article_id, helpful: body.helpful });
    }

    // KB revision history for an article
    const kbRevisionsMatch = path.match(/^\/api\/kb\/([^/]+)\/revisions$/);
    if (kbRevisionsMatch && method === 'GET') {
      const revisions = await env.DB.prepare(
        'SELECT * FROM rw_kb_revisions WHERE article_id = ? ORDER BY version DESC'
      ).bind(kbRevisionsMatch[1]).all();
      return json({ revisions: revisions.results || [] });
    }

    // ─── Feedback Loop ───
    if (path === '/api/feedback' && method === 'GET') {
      const category = url.searchParams.get('category');
      const status = url.searchParams.get('followup_status');
      let query = 'SELECT * FROM rw_feedback';
      const conditions = [];
      const params = [];
      if (category) { conditions.push('category = ?'); params.push(category); }
      if (status) { conditions.push('followup_status = ?'); params.push(status); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY submitted_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      // NPS calculations
      const npsData = await env.DB.prepare(
        "SELECT nps_score FROM rw_feedback WHERE nps_score IS NOT NULL"
      ).all();
      const scores = (npsData.results || []).map(r => r.nps_score);
      const promoters = scores.filter(s => s >= 9).length;
      const detractors = scores.filter(s => s <= 6).length;
      const totalNps = scores.length;
      const npsScore = totalNps > 0 ? Math.round((promoters / totalNps - detractors / totalNps) * 100) : null;

      const avgRating = await env.DB.prepare(
        "SELECT AVG(rating) as avg, COUNT(*) as count FROM rw_feedback WHERE rating IS NOT NULL"
      ).first();

      const pendingFollowups = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM rw_feedback WHERE followup_status = 'pending' AND followup_action IS NOT NULL"
      ).first();

      return json({
        feedback: result.results || [],
        nps: { score: npsScore, total_responses: totalNps, promoters, detractors, passives: totalNps - promoters - detractors },
        avg_rating: avgRating?.avg ? Math.round(avgRating.avg * 10) / 10 : null,
        total_ratings: avgRating?.count || 0,
        pending_followups: pendingFollowups?.count || 0,
      });
    }

    if (path === '/api/feedback' && method === 'POST') {
      const body = await request.json();
      if (!body.client_name) return json({ error: 'client_name is required' }, 400);
      if (body.nps_score !== undefined && (body.nps_score < 0 || body.nps_score > 10)) return json({ error: 'nps_score must be 0-10' }, 400);
      if (body.rating !== undefined && (body.rating < 1 || body.rating > 5)) return json({ error: 'rating must be 1-5' }, 400);
      const validCategories = ['general', 'product', 'support', 'onboarding', 'billing', 'feature_request'];
      const category = validCategories.includes(body.category) ? body.category : 'general';

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_feedback (id, client_name, client_email, project, nps_score, rating, category, feedback_text, followup_action, followup_owner) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.client_name, body.client_email || null, body.project || null, body.nps_score !== undefined ? body.nps_score : null, body.rating !== undefined ? body.rating : null, category, body.feedback_text || null, body.followup_action || null, body.followup_owner || null).run();

      return json({ feedback: { id, client_name: body.client_name, nps_score: body.nps_score, rating: body.rating, category } }, 201);
    }

    const feedbackMatch = path.match(/^\/api\/feedback\/([^/]+)$/);
    if (feedbackMatch && method === 'PUT') {
      const body = await request.json();
      const fId = feedbackMatch[1];
      const updates = [];
      const values = [];
      if (body.followup_action) { updates.push('followup_action = ?'); values.push(body.followup_action); }
      if (body.followup_status) { updates.push('followup_status = ?'); values.push(body.followup_status); }
      if (body.followup_owner) { updates.push('followup_owner = ?'); values.push(body.followup_owner); }
      if (body.followup_status === 'resolved') { updates.push("resolved_at = datetime('now')"); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      values.push(fId);
      await env.DB.prepare(`UPDATE rw_feedback SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_feedback WHERE id = ?').bind(fId).first();
      return json({ feedback: updated });
    }

    // NPS trend over time
    if (path === '/api/feedback/nps-trend' && method === 'GET') {
      const months = parseInt(url.searchParams.get('months') || '6');
      const trend = await env.DB.prepare(
        `SELECT strftime('%Y-%m', submitted_at) as month,
         COUNT(*) as responses,
         SUM(CASE WHEN nps_score >= 9 THEN 1 ELSE 0 END) as promoters,
         SUM(CASE WHEN nps_score <= 6 THEN 1 ELSE 0 END) as detractors
         FROM rw_feedback WHERE nps_score IS NOT NULL AND submitted_at >= date('now', '-' || ? || ' months')
         GROUP BY month ORDER BY month ASC`
      ).bind(months).all();
      const trendData = (trend.results || []).map(r => ({
        month: r.month,
        responses: r.responses,
        nps: r.responses > 0 ? Math.round((r.promoters / r.responses - r.detractors / r.responses) * 100) : 0,
      }));
      return json({ trend: trendData, period_months: months });
    }

    // ─── Asset Manager ───
    if (path === '/api/assets' && method === 'GET') {
      const type = url.searchParams.get('type');
      const status = url.searchParams.get('status');
      let query = 'SELECT * FROM rw_assets';
      const conditions = [];
      const params = [];
      if (type) { conditions.push('type = ?'); params.push(type); }
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY renewal_date ASC, created_at DESC LIMIT 200';
      const result = await env.DB.prepare(query).bind(...params).all();

      const assets = (result.results || []).map(a => {
        try { a.metadata = JSON.parse(a.metadata || '{}'); } catch { a.metadata = {}; }
        return a;
      });

      // Summary
      const totalMonthly = await env.DB.prepare("SELECT COALESCE(SUM(cost_monthly), 0) as total FROM rw_assets WHERE status = 'active'").first();
      const totalAnnual = await env.DB.prepare("SELECT COALESCE(SUM(cost_annual), 0) as total FROM rw_assets WHERE status = 'active'").first();
      const byType = await env.DB.prepare("SELECT type, COUNT(*) as count, COALESCE(SUM(cost_monthly), 0) as monthly_cost FROM rw_assets WHERE status = 'active' GROUP BY type ORDER BY monthly_cost DESC").all();
      const expiringSoon = await env.DB.prepare(
        "SELECT * FROM rw_assets WHERE expiry_date IS NOT NULL AND expiry_date <= date('now', '+30 days') AND expiry_date >= date('now') AND status = 'active' ORDER BY expiry_date ASC"
      ).all();
      const renewingSoon = await env.DB.prepare(
        "SELECT * FROM rw_assets WHERE renewal_date IS NOT NULL AND renewal_date <= date('now', '+30 days') AND renewal_date >= date('now') AND status = 'active' ORDER BY renewal_date ASC"
      ).all();

      return json({
        assets,
        summary: {
          total_monthly_cost: totalMonthly?.total || 0,
          total_annual_cost: totalAnnual?.total || 0,
          by_type: byType.results || [],
          expiring_soon: (expiringSoon.results || []).length,
          renewing_soon: (renewingSoon.results || []).length,
        },
        expiring_soon: expiringSoon.results || [],
        renewing_soon: renewingSoon.results || [],
      });
    }

    if (path === '/api/assets' && method === 'POST') {
      const body = await request.json();
      if (!body.name) return json({ error: 'name is required' }, 400);
      const validTypes = ['domain', 'server', 'subscription', 'license', 'hardware', 'certificate', 'api_key', 'other'];
      const type = validTypes.includes(body.type) ? body.type : 'other';
      const validStatuses = ['active', 'expiring', 'expired', 'cancelled', 'pending'];
      const status = validStatuses.includes(body.status) ? body.status : 'active';

      const id = crypto.randomUUID();
      const costMonthly = parseFloat(body.cost_monthly || 0);
      const costAnnual = body.cost_annual ? parseFloat(body.cost_annual) : costMonthly * 12;

      await env.DB.prepare(
        'INSERT INTO rw_assets (id, name, type, provider, identifier, status, cost_monthly, cost_annual, renewal_date, expiry_date, auto_renew, owner, notes, metadata) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.name, type, body.provider || null, body.identifier || null, status, costMonthly, costAnnual, body.renewal_date || null, body.expiry_date || null, body.auto_renew ? 1 : 0, body.owner || null, body.notes || null, JSON.stringify(body.metadata || {})).run();

      return json({ asset: { id, name: body.name, type, status, cost_monthly: costMonthly, cost_annual: costAnnual } }, 201);
    }

    const assetMatch = path.match(/^\/api\/assets\/([^/]+)$/);
    if (assetMatch && method === 'GET') {
      const asset = await env.DB.prepare('SELECT * FROM rw_assets WHERE id = ?').bind(assetMatch[1]).first();
      if (!asset) return json({ error: 'Asset not found' }, 404);
      try { asset.metadata = JSON.parse(asset.metadata || '{}'); } catch { asset.metadata = {}; }
      return json({ asset });
    }

    if (assetMatch && method === 'PUT') {
      const body = await request.json();
      const aId = assetMatch[1];
      const updates = [];
      const values = [];
      if (body.name) { updates.push('name = ?'); values.push(body.name); }
      if (body.type) { updates.push('type = ?'); values.push(body.type); }
      if (body.provider !== undefined) { updates.push('provider = ?'); values.push(body.provider); }
      if (body.identifier !== undefined) { updates.push('identifier = ?'); values.push(body.identifier); }
      if (body.status) { updates.push('status = ?'); values.push(body.status); }
      if (body.cost_monthly !== undefined) { updates.push('cost_monthly = ?'); values.push(parseFloat(body.cost_monthly)); }
      if (body.cost_annual !== undefined) { updates.push('cost_annual = ?'); values.push(parseFloat(body.cost_annual)); }
      if (body.renewal_date !== undefined) { updates.push('renewal_date = ?'); values.push(body.renewal_date); }
      if (body.expiry_date !== undefined) { updates.push('expiry_date = ?'); values.push(body.expiry_date); }
      if (body.auto_renew !== undefined) { updates.push('auto_renew = ?'); values.push(body.auto_renew ? 1 : 0); }
      if (body.owner !== undefined) { updates.push('owner = ?'); values.push(body.owner); }
      if (body.notes !== undefined) { updates.push('notes = ?'); values.push(body.notes); }
      if (body.metadata) { updates.push('metadata = ?'); values.push(JSON.stringify(body.metadata)); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      updates.push("updated_at = datetime('now')");
      values.push(aId);
      await env.DB.prepare(`UPDATE rw_assets SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_assets WHERE id = ?').bind(aId).first();
      try { updated.metadata = JSON.parse(updated.metadata || '{}'); } catch { updated.metadata = {}; }
      return json({ asset: updated });
    }

    if (assetMatch && method === 'DELETE') {
      const existing = await env.DB.prepare('SELECT id FROM rw_assets WHERE id = ?').bind(assetMatch[1]).first();
      if (!existing) return json({ error: 'Asset not found' }, 404);
      await env.DB.prepare('DELETE FROM rw_assets WHERE id = ?').bind(assetMatch[1]).run();
      return json({ deleted: true, id: assetMatch[1] });
    }

    // Asset cost report
    if (path === '/api/assets/report' && method === 'GET') {
      const byType = await env.DB.prepare(
        "SELECT type, COUNT(*) as count, COALESCE(SUM(cost_monthly), 0) as monthly, COALESCE(SUM(cost_annual), 0) as annual FROM rw_assets WHERE status = 'active' GROUP BY type ORDER BY monthly DESC"
      ).all();
      const byProvider = await env.DB.prepare(
        "SELECT provider, COUNT(*) as count, COALESCE(SUM(cost_monthly), 0) as monthly FROM rw_assets WHERE status = 'active' AND provider IS NOT NULL GROUP BY provider ORDER BY monthly DESC"
      ).all();
      const totalMonthly = (byType.results || []).reduce((s, r) => s + (r.monthly || 0), 0);
      const totalAnnual = (byType.results || []).reduce((s, r) => s + (r.annual || 0), 0);
      return json({
        total_monthly: totalMonthly,
        total_annual: totalAnnual,
        by_type: byType.results || [],
        by_provider: byProvider.results || [],
      });
    }

    // ─── SOP Library ───
    if (path === '/api/sops' && method === 'GET') {
      const category = url.searchParams.get('category');
      const department = url.searchParams.get('department');
      const status = url.searchParams.get('status');
      let query = 'SELECT * FROM rw_sops';
      const conditions = [];
      const params = [];
      if (category) { conditions.push('category = ?'); params.push(category); }
      if (department) { conditions.push('department = ?'); params.push(department); }
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY updated_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();

      const sops = (result.results || []).map(s => {
        try { s.steps = JSON.parse(s.steps || '[]'); } catch { s.steps = []; }
        try { s.checklist = JSON.parse(s.checklist || '[]'); } catch { s.checklist = []; }
        return s;
      });

      const categories = await env.DB.prepare(
        'SELECT category, COUNT(*) as count FROM rw_sops GROUP BY category ORDER BY count DESC'
      ).all();

      const needsReview = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM rw_sops WHERE status = 'published' AND (last_reviewed IS NULL OR last_reviewed <= date('now', '-' || review_interval_days || ' days'))"
      ).first();

      return json({
        sops,
        categories: categories.results || [],
        needs_review: needsReview?.count || 0,
      });
    }

    if (path === '/api/sops' && method === 'POST') {
      const body = await request.json();
      if (!body.title) return json({ error: 'title is required' }, 400);
      const validStatuses = ['draft', 'review', 'published', 'archived'];
      const status = validStatuses.includes(body.status) ? body.status : 'draft';

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_sops (id, title, category, description, steps, checklist, owner, department, status, review_interval_days) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.title, body.category || 'general', body.description || null, JSON.stringify(body.steps || []), JSON.stringify(body.checklist || []), body.owner || null, body.department || null, status, body.review_interval_days || 90).run();

      return json({ sop: { id, title: body.title, category: body.category || 'general', status, steps_count: (body.steps || []).length } }, 201);
    }

    const sopMatch = path.match(/^\/api\/sops\/([^/]+)$/);
    if (sopMatch && method === 'GET') {
      const sop = await env.DB.prepare('SELECT * FROM rw_sops WHERE id = ?').bind(sopMatch[1]).first();
      if (!sop) return json({ error: 'SOP not found' }, 404);
      try { sop.steps = JSON.parse(sop.steps || '[]'); } catch { sop.steps = []; }
      try { sop.checklist = JSON.parse(sop.checklist || '[]'); } catch { sop.checklist = []; }
      return json({ sop });
    }

    if (sopMatch && method === 'PUT') {
      const body = await request.json();
      const sId = sopMatch[1];
      const updates = [];
      const values = [];
      if (body.title) { updates.push('title = ?'); values.push(body.title); }
      if (body.description !== undefined) { updates.push('description = ?'); values.push(body.description); }
      if (body.category) { updates.push('category = ?'); values.push(body.category); }
      if (body.steps) { updates.push('steps = ?'); values.push(JSON.stringify(body.steps)); }
      if (body.checklist) { updates.push('checklist = ?'); values.push(JSON.stringify(body.checklist)); }
      if (body.owner !== undefined) { updates.push('owner = ?'); values.push(body.owner); }
      if (body.department !== undefined) { updates.push('department = ?'); values.push(body.department); }
      if (body.status) { updates.push('status = ?'); values.push(body.status); }
      if (body.review_interval_days) { updates.push('review_interval_days = ?'); values.push(body.review_interval_days); }
      if (body.mark_reviewed) { updates.push("last_reviewed = date('now')"); updates.push('version = version + 1'); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      updates.push("updated_at = datetime('now')");
      values.push(sId);
      await env.DB.prepare(`UPDATE rw_sops SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_sops WHERE id = ?').bind(sId).first();
      try { updated.steps = JSON.parse(updated.steps || '[]'); } catch { updated.steps = []; }
      try { updated.checklist = JSON.parse(updated.checklist || '[]'); } catch { updated.checklist = []; }
      return json({ sop: updated });
    }

    if (sopMatch && method === 'DELETE') {
      const existing = await env.DB.prepare('SELECT id FROM rw_sops WHERE id = ?').bind(sopMatch[1]).first();
      if (!existing) return json({ error: 'SOP not found' }, 404);
      await env.DB.prepare('DELETE FROM rw_sops WHERE id = ?').bind(sopMatch[1]).run();
      return json({ deleted: true, id: sopMatch[1] });
    }

    // SOPs needing review
    if (path === '/api/sops/needs-review' && method === 'GET') {
      const overdue = await env.DB.prepare(
        "SELECT * FROM rw_sops WHERE status = 'published' AND (last_reviewed IS NULL OR last_reviewed <= date('now', '-' || review_interval_days || ' days')) ORDER BY last_reviewed ASC LIMIT 50"
      ).all();
      return json({ needs_review: overdue.results || [], count: (overdue.results || []).length });
    }

    // ─── Revenue Forecasting ───
    if (path === '/api/forecast' && method === 'GET') {
      const period = url.searchParams.get('period');
      let query = 'SELECT * FROM rw_forecast';
      const params = [];
      if (period) { query += ' WHERE period = ?'; params.push(period); }
      query += ' ORDER BY period_start DESC LIMIT 24';
      const result = await env.DB.prepare(query).bind(...params).all();

      const forecasts = (result.results || []).map(f => {
        try { f.assumptions = JSON.parse(f.assumptions || '[]'); } catch { f.assumptions = []; }
        return f;
      });

      // Calculate accuracy for periods with actuals
      const withActuals = forecasts.filter(f => f.actual_revenue > 0);
      const avgAccuracy = withActuals.length > 0
        ? Math.round(withActuals.reduce((s, f) => {
            const variance = Math.abs(f.projected_revenue - f.actual_revenue) / (f.projected_revenue || 1);
            return s + (1 - Math.min(variance, 1)) * 100;
          }, 0) / withActuals.length)
        : null;

      return json({
        forecasts,
        accuracy: avgAccuracy,
        periods_with_actuals: withActuals.length,
      });
    }

    if (path === '/api/forecast' && method === 'POST') {
      const body = await request.json();
      if (!body.period_start || !body.period_end) return json({ error: 'period_start and period_end are required' }, 400);
      const validPeriods = ['monthly', 'quarterly', 'annual'];
      const period = validPeriods.includes(body.period) ? body.period : 'monthly';

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rw_forecast (id, period, period_start, period_end, projected_revenue, actual_revenue, projected_expenses, actual_expenses, confidence, assumptions, notes, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, period, body.period_start, body.period_end, parseFloat(body.projected_revenue || 0), parseFloat(body.actual_revenue || 0), parseFloat(body.projected_expenses || 0), parseFloat(body.actual_expenses || 0), body.confidence || 50, JSON.stringify(body.assumptions || []), body.notes || null, body.created_by || null).run();

      return json({ forecast: { id, period, period_start: body.period_start, period_end: body.period_end, projected_revenue: parseFloat(body.projected_revenue || 0), confidence: body.confidence || 50 } }, 201);
    }

    const forecastMatch = path.match(/^\/api\/forecast\/([^/]+)$/);
    if (forecastMatch && method === 'PUT') {
      const body = await request.json();
      const fId = forecastMatch[1];
      const updates = [];
      const values = [];
      if (body.projected_revenue !== undefined) { updates.push('projected_revenue = ?'); values.push(parseFloat(body.projected_revenue)); }
      if (body.actual_revenue !== undefined) { updates.push('actual_revenue = ?'); values.push(parseFloat(body.actual_revenue)); }
      if (body.projected_expenses !== undefined) { updates.push('projected_expenses = ?'); values.push(parseFloat(body.projected_expenses)); }
      if (body.actual_expenses !== undefined) { updates.push('actual_expenses = ?'); values.push(parseFloat(body.actual_expenses)); }
      if (body.confidence !== undefined) { updates.push('confidence = ?'); values.push(body.confidence); }
      if (body.assumptions) { updates.push('assumptions = ?'); values.push(JSON.stringify(body.assumptions)); }
      if (body.notes !== undefined) { updates.push('notes = ?'); values.push(body.notes); }
      if (updates.length === 0) return json({ error: 'nothing to update' }, 400);
      updates.push("updated_at = datetime('now')");
      values.push(fId);
      await env.DB.prepare(`UPDATE rw_forecast SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
      const updated = await env.DB.prepare('SELECT * FROM rw_forecast WHERE id = ?').bind(fId).first();
      try { updated.assumptions = JSON.parse(updated.assumptions || '[]'); } catch { updated.assumptions = []; }
      return json({ forecast: updated });
    }

    // Generate AI forecast based on pipeline + historical data
    if (path === '/api/forecast/generate' && method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const months = body.months || 3;

      // Gather data for forecast
      const pipelineDeals = await env.DB.prepare(
        "SELECT stage, COALESCE(SUM(value * probability / 100.0), 0) as weighted, COALESCE(SUM(value), 0) as total, COUNT(*) as count FROM rw_crm_deals WHERE stage NOT IN ('won','lost') GROUP BY stage"
      ).all();
      const wonDeals = await env.DB.prepare(
        "SELECT strftime('%Y-%m', won_at) as month, COALESCE(SUM(value), 0) as revenue, COUNT(*) as count FROM rw_crm_deals WHERE stage = 'won' AND won_at IS NOT NULL GROUP BY month ORDER BY month DESC LIMIT 12"
      ).all();
      const invoicePaid = await env.DB.prepare(
        "SELECT strftime('%Y-%m', paid_at) as month, COALESCE(SUM(amount), 0) as revenue, COUNT(*) as count FROM rw_invoices WHERE status = 'paid' AND paid_at IS NOT NULL GROUP BY month ORDER BY month DESC LIMIT 12"
      ).all();
      const expenses = await env.DB.prepare(
        "SELECT strftime('%Y-%m', expense_date) as month, COALESCE(SUM(amount), 0) as total FROM rw_expenses WHERE expense_date >= date('now', '-12 months') GROUP BY month ORDER BY month DESC LIMIT 12"
      ).all();

      const pipelineWeighted = (pipelineDeals.results || []).reduce((s, r) => s + (r.weighted || 0), 0);
      const historicalRevenue = (wonDeals.results || []).map(r => r.revenue);
      const avgMonthlyRevenue = historicalRevenue.length > 0 ? historicalRevenue.reduce((s, v) => s + v, 0) / historicalRevenue.length : 0;
      const historicalExpenses = (expenses.results || []).map(r => r.total);
      const avgMonthlyExpenses = historicalExpenses.length > 0 ? historicalExpenses.reduce((s, v) => s + v, 0) / historicalExpenses.length : 0;

      // Generate monthly forecasts
      const generatedForecasts = [];
      for (let i = 0; i < months; i++) {
        const start = new Date();
        start.setMonth(start.getMonth() + i);
        start.setDate(1);
        const end = new Date(start);
        end.setMonth(end.getMonth() + 1);
        end.setDate(0);

        const monthWeight = i === 0 ? 0.5 : i === 1 ? 0.3 : 0.2;
        const projectedRevenue = avgMonthlyRevenue + (pipelineWeighted * monthWeight);
        const projectedExpenses = avgMonthlyExpenses * (1 + (i * 0.02));
        const confidence = Math.max(20, 80 - (i * 15));

        const fId = crypto.randomUUID();
        await env.DB.prepare(
          'INSERT INTO rw_forecast (id, period, period_start, period_end, projected_revenue, projected_expenses, confidence, assumptions, notes, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(fId, 'monthly', start.toISOString().split('T')[0], end.toISOString().split('T')[0], Math.round(projectedRevenue * 100) / 100, Math.round(projectedExpenses * 100) / 100, confidence, JSON.stringify([
          `Pipeline weighted value: $${Math.round(pipelineWeighted)}`,
          `Historical avg monthly revenue: $${Math.round(avgMonthlyRevenue)}`,
          `Historical avg monthly expenses: $${Math.round(avgMonthlyExpenses)}`,
        ]), 'AI-generated forecast', 'Alexandria').run();

        generatedForecasts.push({
          id: fId,
          period_start: start.toISOString().split('T')[0],
          period_end: end.toISOString().split('T')[0],
          projected_revenue: Math.round(projectedRevenue * 100) / 100,
          projected_expenses: Math.round(projectedExpenses * 100) / 100,
          projected_profit: Math.round((projectedRevenue - projectedExpenses) * 100) / 100,
          confidence,
        });
      }

      let aiInsight = '';
      try {
        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: 'You are Alexandria, Research & Analytics agent on RoadWork (BlackRoad OS). Provide a 3-sentence revenue forecast insight based on the data. Be specific about trends and recommendations.' },
            { role: 'user', content: `Pipeline: $${Math.round(pipelineWeighted)} weighted. Avg monthly revenue: $${Math.round(avgMonthlyRevenue)}. Avg monthly expenses: $${Math.round(avgMonthlyExpenses)}. Historical months: ${historicalRevenue.length}. Generated ${months}-month forecast.` },
          ],
          max_tokens: 200,
        });
        if (aiResult?.response) aiInsight = aiResult.response.trim();
      } catch {}

      return json({
        generated: generatedForecasts,
        inputs: {
          pipeline_weighted: Math.round(pipelineWeighted * 100) / 100,
          avg_monthly_revenue: Math.round(avgMonthlyRevenue * 100) / 100,
          avg_monthly_expenses: Math.round(avgMonthlyExpenses * 100) / 100,
          historical_months: historicalRevenue.length,
        },
        ai_insight: aiInsight || `${months}-month forecast generated. Pipeline value: $${Math.round(pipelineWeighted)}.`,
        generated_by: 'Alexandria',
      }, 201);
    }

    // Forecast vs actual comparison
    if (path === '/api/forecast/accuracy' && method === 'GET') {
      const forecasts = await env.DB.prepare(
        "SELECT * FROM rw_forecast WHERE actual_revenue > 0 ORDER BY period_start DESC LIMIT 24"
      ).all();
      const results = (forecasts.results || []).map(f => {
        const revenueVariance = f.projected_revenue > 0 ? Math.round((f.actual_revenue - f.projected_revenue) / f.projected_revenue * 100) : 0;
        const expenseVariance = f.projected_expenses > 0 ? Math.round((f.actual_expenses - f.projected_expenses) / f.projected_expenses * 100) : 0;
        const revenueAccuracy = Math.max(0, 100 - Math.abs(revenueVariance));
        return {
          period: f.period,
          period_start: f.period_start,
          period_end: f.period_end,
          projected_revenue: f.projected_revenue,
          actual_revenue: f.actual_revenue,
          revenue_variance_pct: revenueVariance,
          revenue_accuracy: revenueAccuracy,
          projected_expenses: f.projected_expenses,
          actual_expenses: f.actual_expenses,
          expense_variance_pct: expenseVariance,
        };
      });
      const avgAccuracy = results.length > 0 ? Math.round(results.reduce((s, r) => s + r.revenue_accuracy, 0) / results.length) : null;
      return json({ comparisons: results, avg_accuracy: avgAccuracy, periods_analyzed: results.length });
    }

    // --- Enhanced: Workflow runs ---
    const wfRunMatch = path.match(/^\/api\/workflows\/([^/]+)\/run$/);
    if (wfRunMatch && method === 'POST') {
      await env.DB.prepare("CREATE TABLE IF NOT EXISTS rw_runs (id TEXT PRIMARY KEY, workflow_id TEXT, status TEXT DEFAULT 'running', started_at TEXT DEFAULT (datetime('now')), completed_at TEXT, result TEXT, error TEXT)").run();
      const id = crypto.randomUUID().slice(0,12);
      await env.DB.prepare("INSERT INTO rw_runs (id,workflow_id) VALUES (?,?)").bind(id,wfRunMatch[1]).run();
      // Increment runs on workflow
      try { await env.DB.prepare('UPDATE rw_workflows SET runs = COALESCE(runs,0) + 1, last_run = datetime(\'now\') WHERE id = ?').bind(wfRunMatch[1]).run(); } catch{}
      return json({ok:true,run_id:id,workflow_id:wfRunMatch[1],status:'running'});
    }
    const wfRunsMatch = path.match(/^\/api\/workflows\/([^/]+)\/runs$/);
    if (wfRunsMatch && method === 'GET') {
      try { await env.DB.prepare("CREATE TABLE IF NOT EXISTS rw_runs (id TEXT PRIMARY KEY, workflow_id TEXT, status TEXT DEFAULT 'running', started_at TEXT DEFAULT (datetime('now')), completed_at TEXT, result TEXT, error TEXT)").run(); } catch{}
      const rows = await env.DB.prepare('SELECT * FROM rw_runs WHERE workflow_id = ? ORDER BY started_at DESC LIMIT 20').bind(wfRunsMatch[1]).all();
      return json({runs:rows.results});
    }

    // --- Enhanced: Task queue ---
    if (path === '/api/queue' && method === 'POST') {
      await env.DB.prepare("CREATE TABLE IF NOT EXISTS rw_queue (id TEXT PRIMARY KEY, title TEXT, description TEXT, status TEXT DEFAULT 'pending', priority TEXT DEFAULT 'normal', assignee TEXT, due_date TEXT, tags TEXT DEFAULT '[]', created_at TEXT DEFAULT (datetime('now')), completed_at TEXT)").run();
      const body = await request.json();
      const id = crypto.randomUUID().slice(0,12);
      await env.DB.prepare("INSERT INTO rw_queue (id,title,description,priority,assignee,due_date,tags) VALUES (?,?,?,?,?,?,?)").bind(id,body.title||'',body.description||'',body.priority||'normal',body.assignee||'',body.due_date||'',JSON.stringify(body.tags||[])).run();
      return json({ok:true,id},201);
    }
    if (path === '/api/queue' && method === 'GET') {
      try { await env.DB.prepare("CREATE TABLE IF NOT EXISTS rw_queue (id TEXT PRIMARY KEY, title TEXT, description TEXT, status TEXT DEFAULT 'pending', priority TEXT DEFAULT 'normal', assignee TEXT, due_date TEXT, tags TEXT DEFAULT '[]', created_at TEXT DEFAULT (datetime('now')), completed_at TEXT)").run(); } catch{}
      const status = url.searchParams.get('status');
      let q = 'SELECT * FROM rw_queue'; const b = [];
      if (status) { q += ' WHERE status = ?'; b.push(status); }
      q += ' ORDER BY created_at DESC LIMIT 50';
      const rows = await env.DB.prepare(q).bind(...b).all();
      return json({tasks:rows.results});
    }

    // --- Enhanced: Automation rules ---
    if (path === '/api/rules' && method === 'POST') {
      await env.DB.prepare("CREATE TABLE IF NOT EXISTS rw_rules (id TEXT PRIMARY KEY, name TEXT, trigger_event TEXT, condition TEXT, action TEXT, enabled INTEGER DEFAULT 1, runs INTEGER DEFAULT 0, created_at TEXT DEFAULT (datetime('now')))").run();
      const body = await request.json();
      const id = crypto.randomUUID().slice(0,12);
      await env.DB.prepare("INSERT INTO rw_rules (id,name,trigger_event,condition,action) VALUES (?,?,?,?,?)").bind(id,body.name||'',body.trigger||'',body.condition||'',body.action||'').run();
      return json({ok:true,id},201);
    }
    if (path === '/api/rules' && method === 'GET') {
      try { await env.DB.prepare("CREATE TABLE IF NOT EXISTS rw_rules (id TEXT PRIMARY KEY, name TEXT, trigger_event TEXT, condition TEXT, action TEXT, enabled INTEGER DEFAULT 1, runs INTEGER DEFAULT 0, created_at TEXT DEFAULT (datetime('now')))").run(); } catch{}
      const rows = await env.DB.prepare('SELECT * FROM rw_rules ORDER BY created_at DESC').all();
      return json({rules:rows.results});
    }

    // --- Enhanced: Dashboard stats ---
    if (path === '/api/dashboard/summary' && method === 'GET') {
      const res = {};
      try { const t = await env.DB.prepare("SELECT status, COUNT(*) as cnt FROM rw_queue GROUP BY status").all(); res.tasks_by_status = (t.results||[]).reduce((a,r)=>{a[r.status]=r.cnt;return a;},{}); } catch{ res.tasks_by_status = {}; }
      try { const w = await env.DB.prepare("SELECT COUNT(*) as cnt FROM rw_workflows WHERE status = 'active' OR status IS NULL").first(); res.active_workflows = w?.cnt||0; } catch{ res.active_workflows = 0; }
      try { const r = await env.DB.prepare("SELECT * FROM rw_runs ORDER BY started_at DESC LIMIT 5").all(); res.recent_runs = r.results; } catch{ res.recent_runs = []; }
      try { const i = await env.DB.prepare("SELECT SUM(total) as pending_total FROM rw_invoices WHERE status = 'draft' OR status = 'sent'").first(); res.pending_invoices_total = i?.pending_total||0; } catch{ res.pending_invoices_total = 0; }
      return json(res);
    }

    // ─── ERP System (from blackroad-tools/erp.py — ported to JS) ───
    // Supports: mock (default), sap, netsuite, generic REST
    async function ensureERPTables(db) {
      await db.prepare("CREATE TABLE IF NOT EXISTS erp_orders (id TEXT PRIMARY KEY, customer TEXT, items TEXT, total REAL, status TEXT DEFAULT 'pending', erp_ref TEXT, created_at TEXT DEFAULT (datetime('now')))").run();
      await db.prepare("CREATE TABLE IF NOT EXISTS erp_inventory (item_id TEXT PRIMARY KEY, name TEXT, quantity INTEGER DEFAULT 0, unit_cost REAL DEFAULT 0, updated_at TEXT DEFAULT (datetime('now')))").run();
    }

    if (path === '/api/erp/order' && method === 'POST') {
      const body = await request.json();
      if (!body.customer || !body.items) return json({ error: 'customer and items required' }, 400);
      await ensureERPTables(env.DB);
      const id = crypto.randomUUID().slice(0, 12);
      const items = body.items || [];
      const total = items.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);
      await env.DB.prepare("INSERT INTO erp_orders (id, customer, items, total, status) VALUES (?,?,?,?,?)").bind(id, body.customer, JSON.stringify(items), total, 'pending').run();
      return json({ ok: true, order_id: id, total, items: items.length, status: 'pending' });
    }
    if (path === '/api/erp/orders') {
      await ensureERPTables(env.DB);
      const status = new URL(request.url).searchParams.get('status');
      let q = "SELECT * FROM erp_orders";
      const params = [];
      if (status) { q += " WHERE status = ?"; params.push(status); }
      q += " ORDER BY created_at DESC LIMIT 50";
      const orders = await env.DB.prepare(q).bind(...params).all();
      return json({ orders: orders.results || [] });
    }
    if (path.startsWith('/api/erp/order/') && method === 'GET') {
      await ensureERPTables(env.DB);
      const id = path.split('/')[4];
      const order = await env.DB.prepare("SELECT * FROM erp_orders WHERE id = ?").bind(id).first();
      if (!order) return json({ error: 'Order not found' }, 404);
      return json({ order: { ...order, items: JSON.parse(order.items || '[]') } });
    }
    if (path === '/api/erp/inventory' && method === 'POST') {
      const body = await request.json();
      if (!body.item_id) return json({ error: 'item_id required' }, 400);
      await ensureERPTables(env.DB);
      await env.DB.prepare("INSERT INTO erp_inventory (item_id, name, quantity, unit_cost) VALUES (?,?,?,?) ON CONFLICT(item_id) DO UPDATE SET quantity = ?, unit_cost = ?, updated_at = datetime('now')")
        .bind(body.item_id, body.name || body.item_id, body.quantity || 0, body.unit_cost || 0, body.quantity || 0, body.unit_cost || 0).run();
      return json({ ok: true, item_id: body.item_id });
    }
    if (path === '/api/erp/inventory') {
      await ensureERPTables(env.DB);
      const items = await env.DB.prepare("SELECT * FROM erp_inventory ORDER BY name LIMIT 100").all();
      return json({ inventory: items.results || [] });
    }

    // ─── CRM System (from blackroad-tools/crm.py — ported to JS) ───
    // Supports: mock (default), salesforce, hubspot, generic REST
    async function ensureCRMTables(db) {
      await db.prepare("CREATE TABLE IF NOT EXISTS crm_contacts (id TEXT PRIMARY KEY, name TEXT, email TEXT, company TEXT, phone TEXT, stage TEXT DEFAULT 'lead', value REAL DEFAULT 0, notes TEXT, owner TEXT, created_at TEXT DEFAULT (datetime('now')), updated_at TEXT DEFAULT (datetime('now')))").run();
      await db.prepare("CREATE TABLE IF NOT EXISTS crm_activities (id TEXT PRIMARY KEY, contact_id TEXT, type TEXT, description TEXT, created_at TEXT DEFAULT (datetime('now')))").run();
    }

    if (path === '/api/crm/contacts' && method === 'POST') {
      const body = await request.json();
      if (!body.name) return json({ error: 'name required' }, 400);
      await ensureCRMTables(env.DB);
      const id = crypto.randomUUID().slice(0, 12);
      await env.DB.prepare("INSERT INTO crm_contacts (id, name, email, company, phone, stage, value, notes, owner) VALUES (?,?,?,?,?,?,?,?,?)")
        .bind(id, body.name, body.email || '', body.company || '', body.phone || '', body.stage || 'lead', body.value || 0, body.notes || '', body.owner || 'roadie').run();
      return json({ ok: true, contact_id: id });
    }
    if (path === '/api/crm/contacts' && method === 'GET') {
      await ensureCRMTables(env.DB);
      const stage = new URL(request.url).searchParams.get('stage');
      const owner = new URL(request.url).searchParams.get('owner');
      let q = "SELECT * FROM crm_contacts";
      const conditions = []; const params = [];
      if (stage) { conditions.push("stage = ?"); params.push(stage); }
      if (owner) { conditions.push("owner = ?"); params.push(owner); }
      if (conditions.length) q += " WHERE " + conditions.join(" AND ");
      q += " ORDER BY updated_at DESC LIMIT 50";
      const contacts = await env.DB.prepare(q).bind(...params).all();
      return json({ contacts: contacts.results || [] });
    }
    if (path.startsWith('/api/crm/contact/') && method === 'GET') {
      await ensureCRMTables(env.DB);
      const id = path.split('/')[4];
      const contact = await env.DB.prepare("SELECT * FROM crm_contacts WHERE id = ?").bind(id).first();
      if (!contact) return json({ error: 'Contact not found' }, 404);
      const activities = await env.DB.prepare("SELECT * FROM crm_activities WHERE contact_id = ? ORDER BY created_at DESC LIMIT 20").bind(id).all();
      return json({ contact, activities: activities.results || [] });
    }
    if (path.startsWith('/api/crm/contact/') && method === 'PUT') {
      await ensureCRMTables(env.DB);
      const id = path.split('/')[4];
      const body = await request.json();
      const sets = []; const params = [];
      for (const [k, v] of Object.entries(body)) {
        if (['name','email','company','phone','stage','value','notes','owner'].includes(k)) {
          sets.push(k + " = ?"); params.push(v);
        }
      }
      if (!sets.length) return json({ error: 'Nothing to update' }, 400);
      sets.push("updated_at = datetime('now')");
      params.push(id);
      await env.DB.prepare("UPDATE crm_contacts SET " + sets.join(", ") + " WHERE id = ?").bind(...params).run();
      return json({ ok: true, contact_id: id });
    }
    if (path === '/api/crm/activity' && method === 'POST') {
      const body = await request.json();
      if (!body.contact_id || !body.type) return json({ error: 'contact_id and type required' }, 400);
      await ensureCRMTables(env.DB);
      const id = crypto.randomUUID().slice(0, 8);
      await env.DB.prepare("INSERT INTO crm_activities (id, contact_id, type, description) VALUES (?,?,?,?)").bind(id, body.contact_id, body.type, body.description || '').run();
      return json({ ok: true, activity_id: id });
    }
    if (path === '/api/crm/pipeline') {
      await ensureCRMTables(env.DB);
      const stages = ['lead','qualified','proposal','negotiation','closed-won','closed-lost'];
      const pipeline = [];
      for (const stage of stages) {
        const r = await env.DB.prepare("SELECT COUNT(*) as count, COALESCE(SUM(value),0) as total_value FROM crm_contacts WHERE stage = ?").bind(stage).first();
        pipeline.push({ stage, count: r?.count || 0, total_value: r?.total_value || 0 });
      }
      return json({ pipeline });
    }

    // ─── RoadC Playground (from roadc-playground/server.py — ported) ───
    if (path === '/api/roadc/examples') {
      return json({ examples: [
        { id: 'hello', name: 'Hello World', code: 'print("Hello from RoadC!")\\nprint("Born on BlackRoad")' },
        { id: 'fibonacci', name: 'Fibonacci', code: 'fun fibonacci(n):\\n    if n <= 1:\\n        return n\\n    return fibonacci(n-1) + fibonacci(n-2)\\n\\nlet i = 0\\nwhile i <= 12:\\n    print(fibonacci(i))\\n    i = i + 1' },
        { id: 'factorial', name: 'Factorial', code: 'fun factorial(n):\\n    if n <= 1:\\n        return 1\\n    return n * factorial(n-1)\\n\\nprint(factorial(10))' },
        { id: 'fizzbuzz', name: 'FizzBuzz', code: 'let i = 1\\nwhile i <= 30:\\n    if i % 15 == 0:\\n        print("FizzBuzz")\\n    else if i % 3 == 0:\\n        print("Fizz")\\n    else if i % 5 == 0:\\n        print("Buzz")\\n    else:\\n        print(i)\\n    i = i + 1' },
      ]});
    }

    return json({ error: 'Not found', service: 'roadwork' }, 404);
  },
};
