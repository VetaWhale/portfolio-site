
const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const bodyNode = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content')

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})
function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
/*
const cells = document.querySelectorAll('.portfolio-card');
const button = document.querySelector('.portfolio-card__button')

    for(let cell of cells) {
        button.addEventListener('click', function() {
                if (cell.toggle.contains('close')) {
                    cell.classList.remove('close')
                    button.innerHTML = "Скрыть";
                } else {
                    cell.classList.add('close')
                    button.innerHTML = "Смотреть все проекты"
                }
            });
        }
        */