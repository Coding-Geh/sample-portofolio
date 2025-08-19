// Theme toggle
(function(){const r=document.documentElement,k='theme-preference',b=document.getElementById('themeToggle');const s=localStorage.getItem(k);if(s) r.setAttribute('data-theme',s);if(b){b.addEventListener('click',()=>{const c=r.getAttribute('data-theme')==='light'?'dark':'light';r.setAttribute('data-theme',c);localStorage.setItem(k,c);});}})();

// Mobile drawer
(function(){const btn=document.getElementById('menuToggle');const d=document.getElementById('navDrawer');const bd=document.getElementById('backdrop');const c=document.getElementById('drawerClose');if(!btn||!d||!bd)return;const open=()=>{d.classList.add('show');bd.classList.add('show');bd.hidden=false;btn.setAttribute('aria-expanded','true');};const close=()=>{d.classList.remove('show');bd.classList.remove('show');btn.setAttribute('aria-expanded','false');setTimeout(()=>{bd.hidden=true},250);};btn.addEventListener('click',()=>d.classList.contains('show')?close():open());bd.addEventListener('click',close);if(c) c.addEventListener('click',close);window.addEventListener('keydown',(e)=>{if(e.key==='Escape') close();});})();

// Footer year
document.getElementById('year')?.append(String(new Date().getFullYear()));

// SEO hydrate
(function(){try{const url=location.origin+location.pathname.replace(/index\.html$/,'');document.getElementById('canonical')?.setAttribute('href',url);document.getElementById('ogUrl')?.setAttribute('content',url);const ld1=document.getElementById('ld-json');const ld2=document.getElementById('ld-website');if(ld1){const d=JSON.parse(ld1.textContent||'{}');d.url=url;ld1.textContent=JSON.stringify(d)}if(ld2){const d=JSON.parse(ld2.textContent||'{}');d.url=url;ld2.textContent=JSON.stringify(d)}}catch(_) {}})();

// Contact page validation
(function(){const f=document.getElementById('contactForm');const s=document.getElementById('formStatus');if(!f||!s)return;const setInv=(el,b)=>el.classList.toggle('invalid',b);f.addEventListener('submit',(e)=>{e.preventDefault();const fd=new FormData(f);const n=String(fd.get('name')||'').trim();const em=String(fd.get('email')||'').trim();const m=String(fd.get('message')||'').trim();const nf=f.querySelector('input[name="name"]').closest('.field');const ef=f.querySelector('input[name="email"]').closest('.field');const mf=f.querySelector('textarea[name="message"]').closest('.field');const invN=n.length===0,invE=!/.+@.+\..+/.test(em),invM=m.length===0;setInv(nf,invN);setInv(ef,invE);setInv(mf,invM);if(invN||invE||invM){s.textContent='Please check your inputs.';return;}s.textContent='Sent! (demo)';f.reset();});})();


