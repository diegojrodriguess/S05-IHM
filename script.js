// scripts.js

// Obter elementos
const modal = document.getElementById("theme-modal");
const btn = document.getElementById("theme-button");
const span = document.getElementsByClassName("close")[0];
const normalThemeBtn = document.getElementById("normal-theme");
const darkThemeBtn = document.getElementById("dark-theme");

// Abrir a janela modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Fechar a janela modal
span.onclick = function() {
    modal.style.display = "none";
}

// Fechar a janela modal clicando fora dela
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Trocar para o tema normal
normalThemeBtn.onclick = function() {
    document.body.classList.remove("theme-dark");
    modal.style.display = "none";
}

// Trocar para o tema dark
darkThemeBtn.onclick = function() {
    document.body.classList.add("theme-dark");
    modal.style.display = "none";
}