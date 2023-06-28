'use strict';
//========================================================================================================================================================
// behavior menu on small screen
const siteBody = document.querySelector('body');
const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.icon-menu');

document.addEventListener("click", menuActive);

function menuActive(event) {

    if (event.target.closest('.menu')) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        siteBody.classList.toggle('_lock');
    }

}
//========================================================================================================================================================
// hedlighting header when user scrolling a page

const menuEl = document.querySelector('.menu');
const header = document.querySelector('.header');
const headerStyles = getComputedStyle(header);
const pageFirstChildElStyles = getComputedStyle(document.querySelector('.page > section'), ':first-child');

window.addEventListener('scroll', menuBgHlOnScrl);

// Браузер сказав , що ця функція тормозить , адже переписує стилі , краще передати цей функціонал в CSS
function menuBgHlOnScrl() {

    if ((window.scrollY + parseFloat(headerStyles.height)) >= 100) { // парсимо число із рядків pageFirstChildElStyles.height
        header.classList.add('_scroll');
    } else {
        header.classList.remove('_scroll');
    }

}

