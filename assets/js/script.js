// document.querySelector('.dark-mode-link').addEventListener('click', darkMode);

let filter = document.querySelectorAll('.portfolio--types .btn');
filter.forEach(action => {
    action.addEventListener('click',filterDiv);
});
document.querySelector('.menu-faketrigger').addEventListener('click', toggleMobile);

document.querySelectorAll('.social-media--item').forEach(item => {
    item.addEventListener('mouseover', showSpan);
});
document.querySelectorAll('.techs--logos__item').forEach(item =>{
    item.addEventListener('mouseover', showSpan);
});
document.querySelectorAll('.social-media--item').forEach(item => {
    item.addEventListener('mouseout', hireSpan);
});
document.querySelectorAll('.techs--logos__item').forEach(item =>{
    item.addEventListener('mouseout', hireSpan);
});


function filterDiv(e) {
    let clicked = e.currentTarget.getAttribute('data-bs-type');
    const obj = e.currentTarget;
    filter.forEach(removeClass => {
        removeClass.classList.remove('btn__dark-grey');
        removeClass.classList.add('btn__soft-grey');
    });
    obj.classList.remove('btn__soft-grey');
    obj.classList.add('btn__dark-grey');

    let filterDivs = document.querySelectorAll('.portfolio--projects--item');
    filterDivs.forEach(filt => {
        let type = filt.getAttribute('data-bs-type');
        if(clicked === 'all') {
            filt.classList.remove('d-none');
        } else if (type != clicked) {
            filt.classList.add('d-none');
        } else {
            filt.classList.remove('d-none');
        }
    })
}
function darkMode() {
    let lightBtn = `<i class="fa-regular fa-lightbulb"></i>`;
    let darkBtn = `<i class="fa-solid fa-lightbulb">`;
    let a = document.querySelector('.dark-mode-link a');
    let i = document.querySelector('.dark-mode-link i');
    let tagHtml = document.querySelector('html');

    if(i.classList.contains('fa-solid')) {
        a.innerHTML = `Light Mode ${lightBtn}`;
        i.classList.replace('fa-solid','fa-regular');
    } else {
        a.innerHTML = `Dark Mode ${darkBtn}`;
        i.classList.replace('fa-regular','fa-solid');
    }
    tagHtml.classList.toggle('dark-mode');
}
function toggleMobile() {
    document.querySelector('.navbar--nav').classList.toggle('showMobile');
}

function showSpan(e) {
    let top = e.currentTarget.offsetTop;
    let span = e.currentTarget.querySelector('span');
    span.style.top = `${top + 40}px`;
    span.style.display = 'block';
    setTimeout(() => {
        span.style.opacity = '1';
    }, 300);
}
function hireSpan(e) {
    console.log('sumiu')
    let span = e.currentTarget.querySelector('span');
    span.style.top = `0`;
    span.style.display = 'none';
}





