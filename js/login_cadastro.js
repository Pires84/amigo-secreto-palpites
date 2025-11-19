// -------------------- LOGIN / CADASTRO TOGGLE --------------------

document.addEventListener("DOMContentLoaded", () => {
    const radios = document.querySelectorAll("input[name='auth-toggle']");
    const title = document.querySelector("h1");
    const btn = document.querySelector("button span");
    const emailLabel = document.querySelector("label[for='email']");
    const avatarSection = document.querySelector(".flex.items-center.gap-4"); // foto

    function updateForm(mode) {
        if (mode === "Cadastrar") {
            title.textContent = "Crie sua conta";
            btn.textContent = "Cadastrar";
            emailLabel.textContent = "E-mail (opcional)";
            avatarSection.style.display = "flex";   // mostra foto
        } else {
            title.textContent = "Entrar";
            btn.textContent = "Entrar";
            emailLabel.textContent = "E-mail";
            avatarSection.style.display = "none";   // esconde foto
        }
    }

    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            updateForm(radio.value);
        });
    });

    // Inicialização
    updateForm(document.querySelector("input[name='auth-toggle']:checked")?.value);
});
