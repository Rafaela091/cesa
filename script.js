// Formulário de Contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});

// Carrossel de Imagens para cada Evento
function initCarousels() {
    const carousels = document.querySelectorAll('.carrossel');
    carousels.forEach(carousel => {
        let currentImageIndex = 0;
        const images = carousel.querySelectorAll('.carrossel-img');
        const intervalTime = 1800; // 3 minutos em milissegundos

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.remove('active');
                if (i === index) {
                    img.classList.add('active');
                }
            });
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }

        // Inicia o carrossel
        showImage(currentImageIndex);
        setInterval(nextImage, intervalTime);
    });
}

// Inicializa os carrosséis após o carregamento da página
document.addEventListener('DOMContentLoaded', initCarousels);
