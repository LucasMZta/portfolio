//DARK MODE FUNCTION 
let darkMode = document.querySelector('#darkmode');

darkMode.addEventListener('click', function () {
    const header = document.querySelector('.header');
    const body = document.querySelector('.body');

    const headerMobile = document.querySelector('.header-mobile')
    const buttonMenu = document.querySelector('.nav-item .btn');
    const buttonFooter = document.querySelector('.footer .btn');

    if (darkMode.checked) { 
        // ESTILIZAÇÃO NO DARK MODE
        header.classList.add('header-dark');
        body.classList.add('body-dark');
        headerMobile.classList.add('header-mobile-dark');
        buttonMenu.classList.replace('btn-success', 'btn-light');
        buttonFooter.classList.replace('btn-success', 'btn-dark');

    } else {
        header.classList.remove('header-dark');
        body.classList.remove('body-dark');
        headerMobile.classList.remove('header-mobile-dark');
        buttonMenu.classList.replace('btn-light', 'btn-success');
        buttonFooter.classList.replace('btn-dark', 'btn-success');
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
function convertNumber(number) {
    return (number < 10)?'0'+number:number;
}

const place = document.querySelector('#horaAtual');
let date = new Date();

place.innerText = `${convertNumber(date.getDate())}/${convertNumber(date.getMonth() + 1)}/${date.getFullYear()} ${convertNumber(date.getHours())}:${convertNumber(date.getMinutes())}:${convertNumber(date.getSeconds())}`

function getTime() {
    let date = new Date();
    place.innerText = `${convertNumber(date.getDate())}/${convertNumber(date.getMonth() + 1)}/${date.getFullYear()} ${convertNumber(date.getHours())}:${convertNumber(date.getMinutes())}:${convertNumber(date.getSeconds())}`
}
window.setInterval(getTime, 1000);

