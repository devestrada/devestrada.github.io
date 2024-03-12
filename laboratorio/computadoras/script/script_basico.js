//Menu
let menu = document.querySelector(".nav");
let menuBtn = document.querySelector(".nav__icon");
let close = document.querySelector(".container");

menuBtn.addEventListener('click', function(){
    menu.classList.toggle("active");
})

close.addEventListener("click", function(){
    menu.classList.remove("active");
})