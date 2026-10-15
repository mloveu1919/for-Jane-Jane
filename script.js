const noBtn = document.getElementById('no-btn'); const yesBtn = document.getElementById('yes-btn');
noBtn.addEventListener('mouseover', () => { // យកទំហំរបស់ Container ឬ Window ដើម្បីកុំឱ្យប៊ូតុងរត់ចេញផុតពីកន្លែងមើលឃើញ const maxX = window.innerWidth - noBtn.offsetWidth - 50; const maxY = window.innerHeight - noBtn.offsetHeight - 50;
// បង្កើតទីតាំងចៃដន្យថ្មីក្នុងរង្វង់អេក្រង់
const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);

// កំណត់ទីតាំងថ្មីឱ្យប៊ូតុងរត់ទៅ
noBtn.style.position = 'fixed';
noBtn.style.left = Math.max(20, randomX) + 'px';
noBtn.style.top = Math.max(20, randomY) + 'px';
});
yesBtn.addEventListener('click', () => { alert('Ahhhhhh! 😍 Rkun Jane del sl bong!'); });
