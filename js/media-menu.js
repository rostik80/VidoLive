let li_1 = document.querySelector('.li_1');
let li_2 = document.querySelector('.li_2');
let li_3 = document.querySelector('.li_3');

let search_log_in = document.querySelector('.search-log_in');
let header__navigation_nav = document.querySelector('.header__navigation-nav');
let bacground__media = document.querySelector('.background__media');

let media_menu = document.querySelector('.media-menu');
let media_flag = false

media_menu.addEventListener('mousedown', () => {
    if (media_flag === false) {
        li_1.style.transform="rotate(-50deg)"
        li_2.style.display="none"
        li_3.style.transform="rotate(50deg)"
        li_3.style.marginTop="-2px"
        search_log_in.style.top="70vh"
        header__navigation_nav.style.top="98px"
        bacground__media.style.right="0"
        media_menu.style.justifyContent="center"
        media_flag = true
    } else {
        li_1.style.transform="rotate(0deg)"
        li_2.style.display="block"
        li_3.style.transform="rotate(0deg)"
        li_3.style.marginTop="0"
        search_log_in.style.top="-70vh"
        header__navigation_nav.style.top="-300%"
        bacground__media.style.right="-100%"
        media_menu.style.justifyContent="space-between"
        media_flag = false
    }
});