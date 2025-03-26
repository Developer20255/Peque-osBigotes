document.addEventListener('DOMContentLoaded', () => {
    // Datos de curiosidades (información más completa)
    const curiosities = [
        { 
            title: "Dientes", 
            image: "assets/images/rata1.jpg", 
            text: "Los dientes de las ratas crecen continuamente durante toda su vida, hasta 14 cm al año. Por eso necesitan roer objetos duros como madera o cables para desgastarlos y mantenerlos a una longitud manejable."
        },
        { 
            title: "Olfato", 
            image: "assets/images/rata2.jpg", 
            text: "Las ratas tienen un sentido del olfato extremadamente agudo, capaz de detectar olores a kilómetros de distancia. Esto les ayuda a encontrar comida, evitar depredadores y comunicarse mediante feromonas."
        },
        { 
            title: "Cola", 
            image: "assets/images/rata3.jpg", 
            text: "La cola de una rata no solo sirve para el equilibrio, sino que también regula su temperatura corporal. Cuando hace calor, la sangre fluye a la cola para disipar el calor, y se contrae en climas fríos."
        },
        { 
            title: "Inteligencia", 
            image: "assets/images/rata4.jpg", 
            text: "Las ratas son sorprendentemente inteligentes, capaces de resolver problemas simples como laberintos y aprender trucos básicos. Estudios han demostrado que tienen memoria a largo plazo y pueden reconocer patrones."
        },
        { 
            title: "Sociables", 
            image: "assets/images/rata5.jpg", 
            text: "Las ratas son animales muy sociales y prefieren vivir en grupos. Forman jerarquías, se cuidan entre sí y muestran comportamientos de empatía, como ayudar a una rata atrapada."
        },
        { 
            title: "Sueño", 
            image: "assets/images/rata6.jpg", 
            text: "Las ratas sueñan cuando duermen, especialmente las jóvenes, según estudios de ondas cerebrales. Sus sueños podrían estar relacionados con explorar su entorno o repetir actividades del día."
        },
        { 
            title: "Velocidad", 
            image: "assets/images/rata7.jpg", 
            text: "Las ratas pueden correr hasta 13 km/h en distancias cortas y son ágiles corredoras. Esta velocidad les permite escapar rápidamente de amenazas y explorar grandes áreas en poco tiempo."
        },
        { 
            title: "Dieta", 
            image: "assets/images/rata8.jpg", 
            text: "Son omnívoras y comen casi cualquier cosa disponible, desde granos y frutas hasta carne y desechos. Su adaptabilidad alimenticia es clave para su supervivencia en diversos entornos."
        },
        { 
            title: "Escalada", 
            image: "assets/images/rata9.jpg", 
            text: "Las ratas son excelentes escaladoras y saltadoras, capaces de trepar paredes verticales y saltar hasta 1 metro de altura. Sus garras y cola les dan un agarre y equilibrio excepcionales."
        }
    ];

    // Seleccionar elementos
    const curiosityImage = document.getElementById('curiosity-image');
    const curiosityText = document.getElementById('curiosity-text');
    const rubikContainer = document.querySelector('.curiosities-rubik');

    if (!curiosityImage || !curiosityText || !rubikContainer) {
        console.error("Elementos necesarios no encontrados en el DOM.");
        return;
    }

    // Generar el cubo de Rubik (3x3)
    curiosities.forEach((curiosity, index) => {
        const square = document.createElement('div');
        square.classList.add('rubik-square');
        square.textContent = curiosity.title;
        square.dataset.index = index;
        rubikContainer.appendChild(square);

        // Evento de clic
        square.addEventListener('click', () => {
            // Remover clase active de todos los cuadrados
            document.querySelectorAll('.rubik-square').forEach(s => s.classList.remove('active'));
            // Añadir clase active al cuadrado seleccionado
            square.classList.add('active');
            // Actualizar imagen y texto
            curiosityImage.style.opacity = 0; // Transición de desvanecimiento
            setTimeout(() => {
                curiosityImage.src = curiosities[index].image;
                curiosityText.textContent = curiosities[index].text;
                curiosityImage.style.opacity = 1; // Mostrar nueva imagen
            }, 250); // Sincronizar con la transición de 0.5s / 2
        });
    });

    // Inicializar con el primer elemento activo
    const firstSquare = rubikContainer.querySelector('.rubik-square');
    if (firstSquare) {
        firstSquare.classList.add('active');
    }
});