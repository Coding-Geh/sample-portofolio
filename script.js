// Theme toggle
(function(){const r=document.documentElement,k='theme-preference',b=document.getElementById('themeToggle');const s=localStorage.getItem(k);if(s) r.setAttribute('data-theme',s);if(b){b.addEventListener('click',()=>{const c=r.getAttribute('data-theme')==='light'?'dark':'light';r.setAttribute('data-theme',c);localStorage.setItem(k,c);});}})();

// Mobile drawer
(function(){const btn=document.getElementById('menuToggle');const d=document.getElementById('navDrawer');const bd=document.getElementById('backdrop');const c=document.getElementById('drawerClose');if(!btn||!d||!bd)return;const open=()=>{d.classList.add('show');bd.classList.add('show');bd.hidden=false;btn.setAttribute('aria-expanded','true');};const close=()=>{d.classList.remove('show');bd.classList.remove('show');btn.setAttribute('aria-expanded','false');setTimeout(()=>{bd.hidden=true},250);};btn.addEventListener('click',()=>d.classList.contains('show')?close():open());bd.addEventListener('click',close);if(c) c.addEventListener('click',close);window.addEventListener('keydown',(e)=>{if(e.key==='Escape') close();});})();

// Footer year
document.getElementById('year')?.append(String(new Date().getFullYear()));

// SEO hydrate
(function(){try{const url=location.origin+location.pathname.replace(/index\.html$/,'');document.getElementById('canonical')?.setAttribute('href',url);document.getElementById('ogUrl')?.setAttribute('content',url);const ld1=document.getElementById('ld-json');const ld2=document.getElementById('ld-website');if(ld1){const d=JSON.parse(ld1.textContent||'{}');d.url=url;ld1.textContent=JSON.stringify(d)}if(ld2){const d=JSON.parse(ld2.textContent||'{}');d.url=url;ld2.textContent=JSON.stringify(d)}}catch(_) {}})();

// i18n EN/ID
(function(){const dict={
  en:{meta:{title:'CodingGeh — Portfolio',description:'Personal portfolio of CodingGeh. Clean, fast, modern web projects.'},brand:'CodingGeh',nav:{about:'About',projects:'Projects',contact:'Contact'},hero:{title:'Clean, Fast, Modern.',lead:'I build minimal, production-ready web experiences with a focus on performance and clarity.',cta:{projects:'See Projects',contact:'Get in Touch'}},sections:{featured:'Featured Projects',skills:'Skills & Tools',services:'Services',testimonials:'Testimonials',blog:'Blog'},services:{landing:{title:'Landing Pages',body:'Blazing-fast, SEO-optimized, and production-ready landing pages.'},design:{title:'Design to Code',body:'Pixel-perfect conversion from Figma to accessible, maintainable code.'},seo:{title:'SEO & Analytics',body:'Semantic markup, structured data, sitemaps, and privacy-friendly analytics.'}},testimonials:{1:{body:'Clean code, fast delivery, and thoughtful UX. Exactly what we needed.',by:'— Client A'},2:{body:'Our site loads instantly and ranks better. Great attention to SEO details.',by:'— Client B'},3:{body:'Seamless GitHub Pages setup with CI. Documentation was on point.',by:'— Client C'}},blog:{1:{title:'Optimizing Static Sites for SEO',body:'Canonical URLs, JSON-LD, sitemaps, and practical indexing tips.',cta:'Read more →'},2:{title:'Dark Mode the Right Way',body:'OS preference, localStorage, and accessible contrast considerations.',cta:'Read more →'},3:{title:'GitHub Pages CI in Minutes',body:'Ship with Actions: from main push to live deployment safely.',cta:'Read more →'}},cta:{title:'Have an idea in mind?',lead:'Let’s turn it into a clean, fast, and modern experience.',button:'Contact Me'},footer:{rights:'All rights reserved.'}},
  id:{meta:{title:'CodingGeh — Portofolio',description:'Portofolio pribadi CodingGeh. Proyek web bersih, cepat, modern.'},brand:'CodingGeh',nav:{about:'Tentang',projects:'Proyek',contact:'Kontak'},hero:{title:'Bersih, Cepat, Modern.',lead:'Kami membangun pengalaman web minimal yang siap produksi dengan fokus pada performa dan kejelasan.',cta:{projects:'Lihat Proyek',contact:'Hubungi'}},sections:{featured:'Proyek Unggulan',skills:'Keahlian & Tools',services:'Layanan',testimonials:'Testimoni',blog:'Blog'},services:{landing:{title:'Landing Page',body:'Landing page cepat, SEO-ready, siap produksi.'},design:{title:'Desain ke Kode',body:'Konversi Figma ke kode yang aksesibel dan mudah dirawat.'},seo:{title:'SEO & Analitik',body:'Markup semantik, structured data, sitemap, dan analytics ramah privasi.'}},testimonials:{1:{body:'Kodenya bersih, pengiriman cepat, UX matang. Pas banget.',by:'— Klien A'},2:{body:'Situs kami langsung ngebut dan ranking naik. Detail SEO diperhatikan.',by:'— Klien B'},3:{body:'Setup Pages + CI mulus. Dokumentasinya mantap.',by:'— Klien C'}},blog:{1:{title:'Optimasi SEO untuk Situs Statis',body:'Canonical URL, JSON-LD, sitemap, dan tips indexing praktis.',cta:'Baca selengkapnya →'},2:{title:'Mode Gelap yang Tepat',body:'Preferensi OS, localStorage, dan pertimbangan kontras aksesibel.',cta:'Baca selengkapnya →'},3:{title:'CI GitHub Pages dalam Hitungan Menit',body:'Rilis dengan Actions: dari push main hingga live dengan aman.',cta:'Baca selengkapnya →'}},cta:{title:'Punya ide?',lead:'Yuk wujudkan jadi pengalaman yang bersih, cepat, modern.',button:'Hubungi Saya'},footer:{rights:'All rights reserved.'}}
};
const key='lang-preference';
function setText(){document.querySelectorAll('[data-i18n]').forEach(el=>{const path=el.getAttribute('data-i18n');const val=path.split('.').reduce((o,k)=>o&&o[k]!=null?o[k]:undefined,dict[document.documentElement.lang]);if(typeof val==='string'){if(el.tagName==='META'){el.setAttribute('content',val)} else {el.textContent=val}}});}
function detect(){const qs=new URLSearchParams(location.search);const qp=qs.get('lang');const saved=localStorage.getItem(key);const nav=(navigator.languages?.[0]||navigator.language||'en').toLowerCase().split('-')[0];return ['en','id'].includes(qp)?qp:['en','id'].includes(saved)?saved:['en','id'].includes(nav)?nav:'en'}
const lang=detect();document.documentElement.lang=lang;setText();
const lt=document.getElementById('langToggle');if(lt){lt.textContent=lang.toUpperCase();lt.addEventListener('click',()=>{const next=document.documentElement.lang==='en'?'id':'en';document.documentElement.lang=next;localStorage.setItem(key,next);lt.textContent=next.toUpperCase();setText();});}
// hreflang urls
document.getElementById('alt-en')?.setAttribute('href','https://coding-geh.github.io/codinggeh-portfolio/?lang=en');
document.getElementById('alt-id')?.setAttribute('href','https://coding-geh.github.io/codinggeh-portfolio/?lang=id');
})();

// Contact page validation
(function(){const f=document.getElementById('contactForm');const s=document.getElementById('formStatus');if(!f||!s)return;const setInv=(el,b)=>el.classList.toggle('invalid',b);f.addEventListener('submit',(e)=>{e.preventDefault();const fd=new FormData(f);const n=String(fd.get('name')||'').trim();const em=String(fd.get('email')||'').trim();const m=String(fd.get('message')||'').trim();const nf=f.querySelector('input[name="name"]').closest('.field');const ef=f.querySelector('input[name="email"]').closest('.field');const mf=f.querySelector('textarea[name="message"]').closest('.field');const invN=n.length===0,invE=!/.+@.+\..+/.test(em),invM=m.length===0;setInv(nf,invN);setInv(ef,invE);setInv(mf,invM);if(invN||invE||invM){s.textContent='Please check your inputs.';return;}s.textContent='Sent! (demo)';f.reset();});})();

// Reveal on scroll
(function(){const els=document.querySelectorAll('.reveal');if(!('IntersectionObserver'in window)||els.length===0){els.forEach(e=>e.classList.add('show'));return;}const io=new IntersectionObserver((es)=>{for(const en of es){if(en.isIntersecting){en.target.classList.add('show');io.unobserve(en.target);}}},{threshold:.15});els.forEach(e=>io.observe(e));})();

// Testimonials auto-rotate
(function(){const root=document.getElementById('testimonials');if(!root) return;const items=Array.from(root.querySelectorAll('.t-item'));let i=0;setInterval(()=>{items[i].classList.remove('show');i=(i+1)%items.length;items[i].classList.add('show');},4000);})();

// Back to top
(function(){const btn=document.getElementById('backToTop');if(!btn) return;btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));window.addEventListener('scroll',()=>{btn.style.display=window.scrollY>320?'block':'none'});btn.style.display='none';})();

// Header shadow on scroll
(function(){const h=document.querySelector('.site-header');if(!h) return;window.addEventListener('scroll',()=>{h.style.boxShadow=window.scrollY>8?'0 2px 12px rgba(0,0,0,.12)':'none'});})();

// Count-up stats
(function(){const nums=document.querySelectorAll('.stat .num');if(nums.length===0)return;const io=new IntersectionObserver((es)=>{for(const en of es){if(!en.isIntersecting) continue;const el=en.target;const t=String(el.getAttribute('data-target')||'0').replace(/[^0-9]/g,'');const target=parseInt(t,10)||0;let cur=0;const step=Math.max(1,Math.floor(target/60));const id=setInterval(()=>{cur+=step;if(cur>=target){cur=target;clearInterval(id)}el.textContent=String(cur)},16);io.unobserve(el)}});nums.forEach(n=>io.observe(n));})();


