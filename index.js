const elements = document.querySelectorAll('.my-skills__card_title-content');

for(let element of elements) {
    element.onclick = function() {
        if (element.classList.contains('close')) {
            element.classList.add('open');
            element.classList.remove('close')
        } else {
            element.classList.add('close')
            element.classList.remove('open');
        }
    }
}