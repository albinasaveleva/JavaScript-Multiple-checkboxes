const checkboxes = document.querySelectorAll('input[type=checkbox]');
let lastCheck = null;

function handlerCheck(e) {
    let inBetween = false;

    if (e.shiftKey && this.checked) {
        checkboxes.forEach(item => {
            if (item === this && lastCheck || item === lastCheck) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                item.checked = true;
            }
        })
        lastCheck = this;
    } else {
        lastCheck = null;
    } 
};

checkboxes.forEach(item => {
    item.addEventListener('click', handlerCheck)
})