//Menu responsivo
const buttonMenu = document.querySelector(".menu-btn");
const toggleMenu = document.querySelector(".menu");

buttonMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  buttonMenu.classList.toggle("active");
});

const bgComponentes = document.querySelector(".componentes");

bgComponentes.addEventListener("click", ()=> {
  toggleMenu.classList.remove("active");
  buttonMenu.classList.remove("active");
})

//Cambios de pestañas dentro de la web
const btns = document.querySelectorAll("[data-target-tab]");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("active"));

    const items = document.querySelectorAll(".componente");

    items.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    //Menu responsivo
    toggleMenu.classList.remove("active");
    buttonMenu.classList.remove("active");

    document.querySelector(btn.dataset.targetTab).classList.add("active");
  });
});