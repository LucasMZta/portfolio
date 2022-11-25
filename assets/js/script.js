//DARK MODE FUNCTION 
let darkMode = document.querySelector('#darkmode');

darkMode.addEventListener('click', function () {
    const header = document.querySelector('.header');
    const headerMobile = document.querySelector('.header-mobile')
    const button = document.querySelector('.nav-item .btn');

    if (darkMode.checked) {
        header.classList.add('header-dark');
        headerMobile.classList.add('header-mobile-dark');
        button.classList.replace('btn-success', 'btn-light');

    } else {
        header.classList.remove('header-dark');
        headerMobile.classList.remove('header-mobile-dark');
        button.classList.replace('btn-light', 'btn-success');
    };
});

let navMobile = document.querySelector('.header-mobile');
const headerClose = document.querySelector('.header-close');
const tooltip = document.querySelector('#tooltip');


headerClose.addEventListener('click', function () {
    tooltip.classList.toggle('w-mobile');
    headerClose.classList.toggle('header-close-open');
})
navMobile.addEventListener('click', function () {
    tooltip.classList.toggle('w-mobile');
    headerClose.classList.toggle('header-close-open');
});


//FUNCTION TIME
const place = document.querySelector('#horaAtual');
let d = new Date();
place.innerText = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

function getTime() {
    let date = new Date();
    place.innerText = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
window.setInterval(getTime, 1000);

// let date = new Date(2022,2,1,13,15,1);
// console.log(`${date.getDate().padStart(2,'0')}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);


