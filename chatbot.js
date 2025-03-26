document.addEventListener('DOMContentLoaded', () => {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotOptions = document.getElementById('chatbot-options');
    const chatbotResponse = document.getElementById('chatbot-response');

    if (!chatbotButton || !chatbotContainer || !chatbotOptions || !chatbotResponse) {
        console.error("Elementos del chatbot no encontrados en el DOM.");
        return;
    }

    // Opciones del chatbot y sus respuestas
    const options = [
        { text: "¡Hola! ¿En qué puedo ayudarte hoy?", response: "¡Hola! Bienvenido a Pequeños Bigotes. Estoy aquí para ayudarte con cualquier duda sobre nuestras ratitas y servicios." },
        { text: "¿Dónde hacen la entrega?", response: "Hacemos entregas en la plaza de armas, parque Leoncio Prado,Parque San Pedro, consulta los detalles en WhatsApp." },
        { text: "¿Qué mascotas tienen?", response: "Nos especializamos en ratitas adorables de diferentes colores y personalidades , Raza BERKSHIRE,WISTAR Y HOODED. ¡Son nuestras estrellas!" },
        { text: "¿Cuánto cuestan las ratas?", response: "El precio de nuestras ratitas varía entre S/ 35 y S/ 45, dependiendo de la raza y edad. Contáctanos para más detalles." },
        { text: "¿Qué ofertas tienen?", response: "Actualmente tenemos descuentos en ratitas hembra y macho" },
        { text: "¿Qué información tienes sobre las ratas?", response: "Las ratas son inteligentes, sociales y fáciles de cuidar. Explora la sección Curiosidades para aprender más sobre ellas." },
        { text: "Hablar con un asesor en WhatsApp", response: "¡Claro! Redirigiéndote a WhatsApp..." }
    ];

    // Generar opciones dinámicamente
    chatbotOptions.innerHTML = ''; // Limpiar opciones previas
    options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('chatbot-option');
        optionElement.textContent = option.text;
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', () => {
            const selectedOption = options[index];
            chatbotResponse.textContent = selectedOption.response;
            if (selectedOption.text === "Hablar con un asesor en WhatsApp") {
                setTimeout(() => {
                    window.location.href = "https://wa.me/+51917422943";
                }, 1000);
            }
        });
        chatbotOptions.appendChild(optionElement);
    });

    // Alternar visibilidad del chatbot
    chatbotButton.addEventListener('click', (e) => {
        e.stopPropagation();
        chatbotContainer.classList.toggle('hidden');
        if (!chatbotContainer.classList.contains('hidden')) {
            chatbotResponse.textContent = "Selecciona una opción para comenzar.";
        }
    });

    // Cerrar el chatbot si se hace clic fuera
    document.addEventListener('click', (e) => {
        if (!chatbotContainer.contains(e.target) && !chatbotButton.contains(e.target)) {
            chatbotContainer.classList.add('hidden');
        }
    });
});