
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

let filter = document.querySelectorAll('.portfolio .btn');
filter.forEach(action => {
    action.addEventListener('click',filterDiv);
});



