const icerik =document.querySelector('p');
console.log(icerik.classList);
icerik.classList.add('oiscanli');
icerik.classList.remove('error');


const pDegeri=document.querySelectorAll('p');

pDegeri.forEach(oiscanli => {
    if(can.textContent.includes('error'))
    {
        can.classList.add('error');
    }
    if(can.textContent.includes('success'))
    {
        can.classList.add('success');
    }
});