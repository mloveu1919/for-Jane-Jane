const noBtn = document.getElementById('no-btn'); const yesBtn = document.getElementById('yes-btn');
noBtn.addEventListener('mouseover', () => { const maxX = window.innerWidth - noBtn.offsetWidth - 50; const maxY = window.innerHeight - noBtn.offsetHeight - 50;
const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);

noBtn.style.position = 'fixed';
noBtn.style.left = Math.max(20, randomX) + 'px';
noBtn.style.top = Math.max(20, randomY) + 'px';
});
yesBtn.addEventListener('click', () => { alert('Ahhhhh! 😍 Rkun Jane del sl bong!'); });
