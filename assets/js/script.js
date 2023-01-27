function filterDiv(e) {
    let clicked = e.currentTarget.getAttribute('data-bs-type');
    const obj = e.currentTarget;

    filter.forEach(removeClass => {
        removeClass.classList.remove('btn-dark-grey');
    });
    
    obj.classList.add('btn-dark-grey');

    let filterDivs = document.querySelectorAll('.filterDiv');

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

let filter = document.querySelectorAll('.portfolio .btn');
filter.forEach(action => {
    action.addEventListener('click',filterDiv);
});
document.querySelector('.dark-mode-link').addEventListener('click', darkMode);



