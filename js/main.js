// ------------- Navegação simples entre páginas ------------- //
// Cada botão deve ter um atributo data-nav indicando o destino.

document.addEventListener("DOMContentLoaded", () => {

    const navButtons = document.querySelectorAll("[data-nav]");

    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const destino = btn.getAttribute("data-nav");
            if (destino) window.location.href = destino;
        });
    });

});

