'use strict'

function start() {
    contador = 0;
    eventosTeclados();
    puntuacionBase();
    crearComida();
}

function comprobarPerder() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].style.top == snake[i].style.top && snake[0].style.left == snake[i].style.left) {
            perder();
        }
    }
}

function perder(){
    alert("Has perdido", "Hola");
    restart();
}

function restart() {
    /**
     * Borrar y volver a crear la caja contenedor
     * Añadirla al Grid
     */
    contentBox.remove();
    contentBox = document.createElement('div');
    startBox.append(contentBox);

    /**
     * Reinicializar Variables
     */
    varCont = false;
    contador=0;
    dir=2;
    vel=100;

    /**
     * Reinicializar la "cabeza" de la serpiente
     */
    img.style.top='0px';
    img.style.left = '0px';
    snake = [img];

    /**
     * Añadir al contenedor la Serpiente 
     * y la comida
     */
    contentBox.append(snake[0]);
    crearComida();

    /**
     * Guardamos la puntuacion actual
     * y la mas alta
     * y reiniciamos la puntuacion 
     */
    guardarPuntuaciones();
}
