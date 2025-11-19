// Navegação simples entre telas
document.querySelectorAll("[data-go]")
  .forEach(btn => {
    btn.addEventListener("click", () => {
      const destino = btn.dataset.go;

      // esconde todas as telas
      document.querySelectorAll(".page")
        .forEach(p => p.style.display = "none");

      // mostra a tela desejada
      document.getElementById(destino).style.display = "block";
    });
  });

// Exemplo: botão que ainda não tem função
document.querySelectorAll("[data-soon]")
  .forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Função ainda será ativada 😊");
    });
  });
