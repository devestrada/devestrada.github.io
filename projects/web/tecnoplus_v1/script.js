window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navegation = document.querySelector('.navegation');
    menuToggle.classList.toggle('active');
    navegation.classList.toggle('active');
}

function toggleServices() {
    var poputServices = document.getElementById('poputServices');
    poputServices.classList.toggle('active');
}

function toggleMovil() {
    var poputServices = document.getElementById('poputMovil');
    poputServices.classList.toggle('active');
}

function togglePc() {
    var poputServices = document.getElementById('poputPc');
    poputServices.classList.toggle('active');
}

function toggleConsole() {
    var poputServices = document.getElementById('poputConsole');
    poputServices.classList.toggle('active');
}