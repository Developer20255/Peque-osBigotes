document.addEventListener('DOMContentLoaded', () => {
    // Datos de las ratitas
    const ratitasData = {
        1: {
            name: "🐀 Rata Berkshire – Elegancia y Dulzura",
            price: "40 SOLES",
            desc: "¿Amas las ratitas con estilo? 🎀 La Berkshire es la reina de la elegancia: su vientre blanco y su lomo oscuro la hacen irresistible. Dócil, cariñosa y perfecta para convivir en familia, ¡será la consentida de tu hogar! 💖",
            images: [
                "assets/images/rata1-1.jpg",
                "assets/images/rata1-2.jpg",
                "assets/images/rata1-3.jpg",
                "assets/images/rata1-4.jpg"
            ]
        },
        2: {
            name: "🐀 Rata Hooded – Aventurera con Estilo",
            price: "40 SOLES",
            desc: "¡Con su 'capa' de superhéroe, la Hooded está lista para la acción! 🏃‍♂️💨 Juguetona, curiosa y llena de energía, es perfecta para quienes buscan una rata con personalidad y un look inconfundible.",
            images: [
                "assets/images/rata2-1.jpg",
                "assets/images/rata2-2.jpg",
                "assets/images/rata2-3.jpg",
                "assets/images/rata2-5.jpg"
            ]
        },
        3: {
            name: "🔬 Rata Wistar – La Científica Confiable",
            price: "35 - 45 SOLES",
            desc: "Precisión y salud en cuatro patas. 🧪 La Wistar es la favorita de laboratorios y amantes de las ratas por su temperamento tranquilo y genética robusta. Ideal para investigación, crianza o simplemente como mascota inteligente.",
            images: [
                "assets/images/rata3-1.jpg",
                "assets/images/rata3-2.jpg",
                "assets/images/rata3-3.jpg",
                "assets/images/rata3-4.jpg"
            ]
        },
        4: {
            name: "Ratita",
            price: "60 Soles",
            desc: "Dulce y tímida.",
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
                img.alt = `${ratita.name} - Imagen ${index + 1}`;
                if (index === 0) {
                    img.classList.add('active');
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
        if (images.length === 0) return;
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('active');
    });

    // Navegación del carrusel - Siguiente
    nextBtn.addEventListener('click', () => {
        const images = carouselImages.querySelectorAll('img');
        if (images.length === 0) return;
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    });

    // Zoom en las imágenes del carrusel
    carouselImages.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const img = e.target;
            if (img.classList.contains('zoomed')) {
                img.classList.remove('zoomed'); // Quita el zoom
            } else {
                // Remueve zoom de otras imágenes
                carouselImages.querySelectorAll('img').forEach(i => i.classList.remove('zoomed'));
                img.classList.add('zoomed'); // Aplica zoom a la imagen clickeada
            }
        }
    });
});