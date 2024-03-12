//Menu responsivo
const menuBtn = document.getElementById("open-menu");
const menuToggle = document.getElementById("menu-links");
const menuInfo = document.getElementById("menu-info");

menuBtn.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuInfo.classList.toggle('active');
    menuBtn.classList.toggle('active');
});
//Modales
const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
    });
});

close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
    });
});
//Envio de correo
const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    if (response.ok) {
        this.reset();
        alert('Gracias por contactarme, te escribiré pronto');
    }
}
//Obtener año
const fecha = new Date();
const year = fecha.getFullYear();

const añoElemento = document.getElementById("year");
añoElemento.textContent = year;