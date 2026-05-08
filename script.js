const timelineData=["Pune, Maharashtra","Junior Data Scientist","ELendil Internship","IBM Certified Data Scientist 101","Volunteer Certificate","College Presentation — 2nd Rank","Business Understanding","Problem Solving Mindset"];
const skills={Programming:["Python","C++","Java","SQL","Web Development"],Libraries:["Pandas","NumPy","Scikit-learn","Matplotlib"],Database:["MySQL","Firebase"],Cloud:["AWS","Render"],Visualization:["Power BI"],Marketing:["SEO","Meta Ads","Analytics"],Business:["Problem Solving","Strategy"]};
const projects=[
{title:"Life OS",desc:"AI-assisted personal operating system for planning, journaling, and execution.",stack:"Python, FastAPI, Firebase, JS",impact:"34% task completion lift",live:"https://example.com"},
{title:"Socio App",desc:"Community-first engagement platform with content intelligence.",stack:"Node, MySQL, GSAP UI",impact:"10k+ user actions",live:"https://example.com"},
{title:"Sales Prediction",desc:"Forecast pipeline for regional demand planning.",stack:"Scikit-learn, Pandas, Power BI",impact:"92% forecasting accuracy",live:"https://example.com"},
{title:"Customer Churn Prediction",desc:"Risk scoring engine to reduce churn.",stack:"Python, XGBoost, SQL",impact:"18% retention improvement",live:"https://example.com"},
{title:"Chatbot",desc:"Context-aware support bot with custom knowledge routing.",stack:"NLP, JS, Firebase",impact:"65% faster support response",live:"https://example.com"},
{title:"Multiple Live Websites",desc:"Suite of performance-optimized business websites.",stack:"HTML, CSS, JS, Render",impact:"99.9% uptime",live:"https://example.com"}
];

const line=document.querySelector('.line-items');timelineData.forEach(t=>{const d=document.createElement('div');d.className='item';d.textContent=t;line.appendChild(d)});
const orbit=document.getElementById('orbits');Object.entries(skills).forEach(([k,v])=>v.forEach(s=>{const c=document.createElement('div');c.className='chip';c.innerHTML=`<strong>${s}</strong><small> ${k}</small>`;orbit.appendChild(c)}));
const grid=document.getElementById('projectGrid');projects.forEach((p,i)=>{const a=document.createElement('article');a.className='project';a.innerHTML=`<h3>${p.title}</h3><p>${p.desc}</p><small>${p.stack} • ${p.impact}</small>`;a.onclick=()=>openModal(p);grid.appendChild(a)});

const modal=document.getElementById('modal');function openModal(p){document.getElementById('modalBody').innerHTML=`<h3>${p.title}</h3><p>${p.desc}</p><p><strong>Architecture:</strong> Modular data/API/frontend pipeline with robust deployment strategy.</p><p><strong>Challenges Solved:</strong> Data quality, scale, and UX speed in production.</p><p><strong>Results:</strong> ${p.impact}</p>`;document.getElementById('liveLink').href=p.live;modal.classList.add('show');}
document.querySelector('.close').onclick=()=>modal.classList.remove('show');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('show')};

document.getElementById('themeToggle').onclick=()=>{const r=document.documentElement;const light=r.getAttribute('data-theme')==='light';r.setAttribute('data-theme',light?'dark':'light');themeToggle.textContent=light?'Light':'Dark'};
window.addEventListener('mousemove',e=>{document.querySelector('.cursor-glow').style.cssText=`left:${e.clientX}px;top:${e.clientY}px`});

gsap.registerPlugin(ScrollTrigger);const lenis=new Lenis();function raf(t){lenis.raf(t);requestAnimationFrame(raf)}requestAnimationFrame(raf);
gsap.to('.loader',{opacity:0,duration:.9,delay:.8,onComplete:()=>document.querySelector('.loader').remove()});
gsap.utils.toArray('.section,.hero-copy > *,.portrait-card,.project,.item,.chip').forEach(el=>gsap.from(el,{y:30,opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}}));

document.querySelectorAll('.magnetic').forEach(btn=>{btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect();gsap.to(btn,{x:(e.clientX-r.left-r.width/2)*.18,y:(e.clientY-r.top-r.height/2)*.2,duration:.3})});btn.addEventListener('mouseleave',()=>gsap.to(btn,{x:0,y:0,duration:.4}))});
const c=document.getElementById('particles'),ctx=c.getContext('2d');let w,h,p=[];function rs(){w=c.width=innerWidth;h=c.height=innerHeight;p=[...Array(65)].map(()=>({x:Math.random()*w,y:Math.random()*h,v:(Math.random()*.6)+.2,r:Math.random()*1.6+0.2}))}rs();addEventListener('resize',rs);(function anim(){ctx.clearRect(0,0,w,h);ctx.fillStyle='rgba(114,233,255,.35)';p.forEach(o=>{o.y-=o.v;if(o.y<0)o.y=h;ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,6.28);ctx.fill()});requestAnimationFrame(anim)})();
