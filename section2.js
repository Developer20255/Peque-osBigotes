document.addEventListener('DOMContentLoaded', () => {
    // Datos de las imágenes y textos para el carrusel
    const offerData = [
        { image: "assets/images/rata1-3.jpg", text: "¡Grandes descuentos en ratas BERKSHIRE, SI LLEVAS 2 LA UNIDAD TE SALE A 30 SOLES!" },
        { image: "assets/images/rata2-1.jpg", text: "¡Ofertas especiales en ratas HOODED, SI LLEVAS 2 LA UNIDAD TE SALE A 30 SOLES!" },
        { image: "assets/images/rata3-1.jpg", text: "¡Ofertas especiales en ratas WISTAR, SI LLEVAS 2 LA UNIDAD TE SALE A 30 SOLES!" }
    ];

    // Seleccionar el contenedor de imágenes y el texto animado
    const offersImagesContainer = document.querySelector('.offers-images');
    const animatedText = document.querySelector('.animated-text');
    if (!offersImagesContainer || !animatedText) {
        console.error("Elementos necesarios no encontrados en el DOM.");
        return;
    }

    // Crear las imágenes y añadirlas al contenedor
    offerData.forEach((item, index) => {
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = `Oferta ${index + 1}`;
        if (index === 0) {
            img.classList.add('active'); // Mostrar la primera imagen inmediatamente
            animatedText.textContent = item.text; // Mostrar el primer texto inmediatamente
        }
        offersImagesContainer.appendChild(img);
    });

    // Obtener todas las imágenes recién creadas
    const images = offersImagesContainer.querySelectorAll('img');
    let currentIndex = 0;

    // Función para cambiar las imágenes y el texto
    function changeImageAndText() {
        images[currentIndex].classList.remove('active'); // Ocultar la imagen actual
        currentIndex = (currentIndex + 1) % images.length; // Avanzar al siguiente índice
        images[currentIndex].classList.add('active'); // Mostrar la nueva imagen
        animatedText.textContent = offerData[currentIndex].text; // Actualizar el texto
    }

    // Iniciar el carrusel automático cada 5 segundos
    setInterval(changeImageAndText, 5000);
});