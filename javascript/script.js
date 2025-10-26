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

    const carousel = document.querySelector('.game-carousel');
    const prevBtn = document.getElementById('prev-game');
    const nextBtn = document.getElementById('next-game');

    if (carousel && prevBtn && nextBtn) {
        
        // Função para pegar a largura do card (incluindo padding/margin)
        const getCardWidth = () => {
            const firstCard = carousel.querySelector('.game-card');
            if (!firstCard) return 0;
            
            // getBoundingClientRect().width é mais preciso que offsetWidth
            return firstCard.getBoundingClientRect().width;
        };

        // Função para rolar para o próximo
        const scrollNext = () => {
            const cardWidth = getCardWidth();
            if (cardWidth === 0) return;

            // Verifica se está perto do final
            // (Usamos 10 pixels de margem de erro para cálculos)
            const isAtEnd = carousel.scrollWidth - carousel.scrollLeft - carousel.clientWidth < 10;

            if (isAtEnd) {
                // Se está no final, volta para o começo (loop)
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Se não, avança um card
                // Usamos scrollBy para rolar *relativo* à posição atual
                carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        };

        // Função para rolar para o anterior
        const scrollPrev = () => {
            const cardWidth = getCardWidth();
            if (cardWidth === 0) return;

            const isAtStart = carousel.scrollLeft < 10;

            if (isAtStart) {
                // Se está no começo, vai para o final (loop)
                carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
            } else {
                // Se não, volta um card
                carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
            }
        };

        // Adiciona os eventos aos botões
        nextBtn.addEventListener('click', scrollNext);
        prevBtn.addEventListener('click', scrollPrev);

        // Inicia o auto-play (troca a cada 5 segundos)
        // 5000 milissegundos = 5 segundos
        setInterval(scrollNext, 5000);
    }
});


