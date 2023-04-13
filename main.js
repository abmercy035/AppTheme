const menu = document.getElementById('site-mobile-nav-bar');
const sideNav = document.getElementById('aside-nav');
const close = document.getElementById('close-icon');

menu.addEventListener("click", () => {
 sideNav.style.width = "200px"
})
close.addEventListener("click", () => {
 sideNav.style.width = "0"
})