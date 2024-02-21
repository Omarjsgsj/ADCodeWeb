function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}

// Animacion de Letras Marketing, Diseño Web y Redes Sociales
var palabras = ['Marketing', 'Diseño Web', 'Redes Sociales'];
var cambio = document.querySelector('.cambio');
var index = 0; // Inicializar en 0
var forward = true;

// Iniciar el efecto de escribir y borrar la palabra
escribirPalabra(palabras[index]);

function animarPalabras() {
    if (forward) {
        escribirPalabra(palabras[index]);
    } else {
        borrarPalabra(palabras[index]);
    }
}

function escribirPalabra(palabra) {
    cambio.textContent = '';
    var i = 0;
    var typingEffect = setInterval(function() {
        cambio.textContent += palabra[i];
        i++;
        if (i === palabra.length) {
            clearInterval(typingEffect);
            setTimeout(function() {
                forward = false;
                animarPalabras();
            }, 1000); // Tiempo de espera antes de borrar la palabra (1000ms = 1 segundo)
        }
    }, 100); // Velocidad de escritura (100ms = 0.1 segundo)
}

function borrarPalabra(palabra) {
    var i = palabra.length;
    var backspacingEffect = setInterval(function() {
        cambio.textContent = cambio.textContent.slice(0, i);
        i--;
        if (i === 0) {
            clearInterval(backspacingEffect);
            setTimeout(function() {
                forward = true;
                index = (index + 1) % palabras.length;
                animarPalabras();
            }, 1000); // Tiempo de espera antes de volver a escribir la palabra (1000ms = 1 segundo)
        }
    }, 100); // Velocidad de borrado (100ms = 0.1 segundo)
}

// Fin de Animacion de Letras Marketing, Diseño Web y Redes Sociales