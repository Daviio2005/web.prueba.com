document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    toggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});

function mostrarSeccion(id){
    const seccions = document.getElementsByClassName("section");

    for(let i = 0; i < seccions.length; i++){
        seccions[i].style.display = 'none';
    }

    const seccionMostrada = document.getElementById(id);

    if (seccionMostrada){
        seccionMostrada.style.display = 'block';
    }
}