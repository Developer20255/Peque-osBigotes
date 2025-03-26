document.addEventListener('DOMContentLoaded', () => {
    // Datos de las ratitas
    const ratitasData = {
        1: {
            name: "Ratita BERKSHIRE",
            price: "35 SOLES",
            desc: "Una ratita tranquila y curiosa, perfecta para principiantes.",
            images: [
                "assets/images/rata1-1.jpg",
                "assets/images/rata1-2.jpg",
                "assets/images/rata1-3.jpg",
                "assets/images/rata1-4.jpg"
            ]
        },
        2: {
            name: "Ratita HOODED",
            price: "40 SOLES",
            desc: "Amigable y juguetona, ideal para familias.",
            images: [
                "assets/images/rata2-1.jpg",
                "assets/images/rata2-2.jpg",
                "assets/images/rata2-3.jpg",
                "assets/images/rata2-4.jpg"
            ]
        },
        3: {
            name: "Ratita WISTAR",
            price: "35 - 45 SOLES",
            desc: "Inteligente y activa, le encanta explorar.",
            images: [
                "assets/images/rata3-1.jpg",
                "assets/images/rata3-2.jpg",
                "assets/images/rata3-3.jpg",
                "assets/images/rata3-4.jpg"
            ]
        },
        4: {
            name: "Ratita Marrón",
            price: "$18",
            desc: "Dulce y tímida, necesita un hogar amoroso.",
            images: [
                "assets/images/rata4-1.jpg",
                "assets/images/rata4-2.jpg",
                "assets/images/rata4-3.jpg",
                "assets/images/rata4-4.jpg"
            ]
        }
    };

    // Seleccionar elementos existentes en el DOM
    const modal = document.getElementById('ratita-modal');
    const closeModal = document.querySelector('.close-modal');
    const viewButtons = document.querySelectorAll('.view-btn');
    const carouselImages = document.querySelector('.carousel-images');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const ratitaName = document.getElementById('ratita-name');
    const ratitaPrice = document.getElementById('ratita-price');
    const ratitaDesc = document.getElementById('ratita-desc');

    let currentIndex = 0;

    // Verificar que los elementos existen
    if (!modal || !closeModal || !viewButtons.length || !carouselImages || !prevBtn || !nextBtn || !ratitaName || !ratitaPrice || !ratitaDesc) {
        console.error("Uno o más elementos necesarios no se encuentran en el DOM.");
        return;
    }

    // Asociar eventos a los botones "Ver"
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const ratitaId = button.getAttribute('data-ratita');
            const ratita = ratitasData[ratitaId];

            // Llenar el modal
            ratitaName.textContent = ratita.name;
            ratitaPrice.textContent = `Precio: ${ratita.price}`;
            ratitaDesc.textContent = ratita.desc;

            // Cargar imágenes del carrusel
            carouselImages.innerHTML = '';
            ratita.images.forEach((src, index) => {
                const img = document.createElement('img');
                img.src = src;
                if (index === 0) {
                    img.classList.add('active'); // Solo añadir 'active' a la primera imagen
                }
                carouselImages.appendChild(img);
            });

            currentIndex = 0;
            modal.style.display = 'block'; // Mostrar el modal
        });
    });

    // Cerrar el modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Navegación del carrusel - Anterior
    prevBtn.addEventListener('click', () => {
        const images = carouselImages.querySelectorAll('img');
        if (images.length === 0) return; // Evitar errores si no hay imágenes
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('active');
    });

    // Navegación del carrusel - Siguiente
    nextBtn.addEventListener('click', () => {
        const images = carouselImages.querySelectorAll('img');
        if (images.length === 0) return; // Evitar errores si no hay imágenes
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    });

    // Ampliar imagen (simplificado)
    carouselImages.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            alert('Aquí se ampliaría la imagen con controles adicionales.');
        }
    });
});