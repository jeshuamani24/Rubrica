document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-hamburguesa");
    const menu = document.querySelector(".palabras-derecha");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("activo"); // Alterna la clase "activo"
    });
});

