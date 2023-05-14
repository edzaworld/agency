let burger = document.querySelector('.popup-menu__btn');
let nav = document.querySelector('.popup-menu__list');
let wrapper = document.querySelector('.popup-menu');

burger.addEventListener('click', () => {
    nav.classList.toggle('popup__show');
});

document.addEventListener('click', (el) => {
    let targetInside = wrapper.contains(el.target);
    if (!targetInside) {
        nav.classList.remove('popup__show');
    } else {
        return;
    }
})


