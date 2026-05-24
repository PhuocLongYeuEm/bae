const starsEl = document.getElementById('stars');
for (let i = 0; i < 160; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${1.5+Math.random()*3}s;--op:${0.2+Math.random()*0.7};animation-delay:${Math.random()*4}s;`;
  starsEl.appendChild(s);
}
const petalsEl = document.getElementById('petals');
const petalChars = ['✿','❀','✾','🌸','❁','🌺'];
for (let i = 0; i < 20; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.textContent = petalChars[Math.floor(Math.random()*petalChars.length)];
  p.style.cssText = `left:${Math.random()*100}%;--fd:${8+Math.random()*12}s;--fdelay:-${Math.random()*15}s;--fx:${(Math.random()-.5)*200}px;font-size:${12+Math.random()*14}px;`;
  petalsEl.appendChild(p);
}
const hp = document.getElementById('heartParts');
for (let i = 0; i < 12; i++) {
  const angle = (i/12)*360;
  const r = 50 + Math.random()*20;
  const el = document.createElement('div');
  el.className = 'hp';
  el.style.cssText = `--hx:${Math.cos(angle*Math.PI/180)*r}px;--hy:${Math.sin(angle*Math.PI/180)*r}px;--hd:${1.5+Math.random()}s;--hdelay:${Math.random()*1.5}s;width:${3+Math.random()*4}px;height:${3+Math.random()*4}px;`;
  hp.appendChild(el);
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
['galleryLabel','card1','card2','card3','motivOrn','motivQuote','card4','mc1','mc2','mc3','msgOrn','msgBubble','msgSig'].forEach(id => {
  const el = document.getElementById(id);
  if(el) observer.observe(el);
});
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
document.querySelectorAll('.photo-card').forEach(card => {
  card.addEventListener('click', () => { lbImg.src = card.querySelector('img').src; lb.classList.add('open'); });
});
document.getElementById('lbClose').addEventListener('click', () => lb.classList.remove('open'));
lb.addEventListener('click', e => { if(e.target === lb) lb.classList.remove('open'); });
document.addEventListener('keydown', e => { if(e.key==='Escape') lb.classList.remove('open'); });

const bgMusic = document.getElementById('bgMusic');
const tryPlayMusic = () => {
  if (bgMusic) {
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was blocked by the browser; the audio element still exists for manual controls.
      });
    }
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', tryPlayMusic);
} else {
  tryPlayMusic();
}
