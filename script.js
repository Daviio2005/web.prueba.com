document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    toggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search-icon");
    const searchInput = document.querySelector(".search-input");

    // Mostrar/ocultar al hacer clic en la lupa
    searchIcon.addEventListener("click", function () {
        searchInput.classList.toggle("visible");
        if (searchInput.classList.contains("visible")) {
            searchInput.focus();
        }
    });

    // Ocultar al hacer clic fuera
    document.addEventListener("click", function (event) {
        const isClickInside = searchInput.contains(event.target) || searchIcon.contains(event.target);
        if (!isClickInside) {
            searchInput.classList.remove("visible");
        }
    });

    // Ocultar con tecla ESC
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            searchInput.classList.remove("visible");
        }
    });
});



function mostrarSeccion(id) {
    const seccions = document.getElementsByClassName("section");

    for (let i = 0; i < seccions.length; i++) {
        seccions[i].style.display = 'none';
    }

    const seccionMostrada = document.getElementById(id);

    if (seccionMostrada) {
        seccionMostrada.style.display = 'block';
    }
}
