const MENU_LINKS = document.querySelectorAll ('.header__menu-link');

MENU_LINKS.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
}))

