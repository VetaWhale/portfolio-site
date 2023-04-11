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
const cells = document.querySelectorAll('.portfolio-card');
const button = document.querySelector('.portfolio-card__button')

    for(let cell of cells) {
        button.addEventListener('click', function() {
                if (cell.classList.contains('close')) {
                    cell.classList.remove('close')
                    button.innerHTML = "Скрыть";
                } else {
                    cell.classList.add('close')
                    button.innerHTML = "Смотреть все проекты"
                }
            });
        }