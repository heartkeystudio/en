// Lista de mensagens para exibir
const mensagens = [
    "WE PUT OUR HEARTS INTO THAT!",
    "WHERE PASSION MEETS CREATIVITY.",
    "ART, SOUND, CODE – IN PERFECT HARMONY.",
    "EVERY PIXEL, EVERY NOTE – MADE WITH LOVE."
];

let indice = 0; // Índice da mensagem atual

function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}


function trocarTexto() {
    // Atualiza o texto
    document.getElementById("text_changer").textContent = mensagens[indice];

    // Incrementa o índice ou reinicia se chegar ao final
    indice = (indice + 1) % mensagens.length;
}

document.addEventListener("DOMContentLoaded", function () {
    // Mantém seu código original
    setInterval(trocarTexto, 6000); // Troca a cada 6 segundos

    // Código para mudar a cor do header no scroll
    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        if (window.scrollY > 50) { 
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});


