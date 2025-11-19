// login_cadastro.js
// ------------------------------
// Alternância entre "Cadastrar" e "Entrar"
// E navegação com atributos data-nav
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {

    // --- Navegação ---
    const navButtons = document.querySelectorAll("[data-nav]");
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const destino = btn.getAttribute("data-nav");
            if (destino) window.location.href = destino;
        });
    });

    // --- Alternância de abas ---
    const radios = document.querySelectorAll("input[name='auth-toggle']");
    const titulo = document.querySelector("h1"); // "Crie sua conta" / "Entrar na sua conta"
    const botaoPrincipal = document.querySelector("button"); // texto muda de Cadastrar ↔ Entrar

    function atualizarFormulario() {
        const modo = document.querySelector("input[name='auth-toggle']:checked").value;

        if (modo === "Cadastrar") {
            titulo.textContent = "Crie sua conta";
            botaoPrincipal.textContent = "Cadastrar";
        } else {
            titulo.textContent = "Entrar na sua conta";
            botaoPrincipal.textContent = "Entrar";
        }
    }

    radios.forEach(radio => {
        radio.addEventListener("change", atualizarFormulario);
    });

    atualizarFormulario(); // inicialização
});
