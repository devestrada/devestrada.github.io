//Menu responsivo
const menuBtn = document.getElementById("open-menu");
const menuToggle = document.getElementById("menu-links");
const menuInfo = document.getElementById("menu-info");

menuBtn.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuInfo.classList.toggle('active');
    menuBtn.classList.toggle('active');
});