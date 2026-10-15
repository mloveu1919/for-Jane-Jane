const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// ព្រឹត្តិការណ៍ពេលយក Mouse ទៅជិត ឬប៉ះប៊ូតុង "អត់ទេ"
noBtn.addEventListener('mouseover', () => {
    // កំណត់ទំហំរត់ផ្អែកលើទំហំ Screen របស់អ្នក
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // បង្កើតទីតាំងចៃដន្យ (Random Position)
    const randomX = Math.floor(Math.random() * (windowWidth - 100));
    const randomY = Math.floor(Math.random() * (windowHeight - 50));

    // ផ្លាស់ប្តូរទីតាំងប៊ូតុងទៅកន្លែងថ្មី
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// ព្រឹត្តិការណ៍ពេលចុចប៊ូតុង "ប្រាកដជាស្រឡាញ់!"
yesBtn.addEventListener('click', () => {
    alert('耶! 😍 Rkun del slanh bong!');
});
