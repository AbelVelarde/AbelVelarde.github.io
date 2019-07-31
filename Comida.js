'use strict'

let comida = document.createElement('div');
comida.style.height = '20px';
comida.style.width = '20px';
comida.style.position = 'absolute';
comida.style.backgroundColor = 'green';
comida.style.boxSizing = 'border-box';
comida.style.border = '2px grey solid';

function crearComida() {
    let cXPos = parseInt(Math.random() * 24) * 20;
    let cyPos = parseInt(Math.random() * 24) * 20;

    comida.style.left = cXPos + 'px';
    comida.style.top = cyPos + 'px';

    contentBox.append(comida);
}

function comer() {

    if (img.style.left == comida.style.left && img.style.top == comida.style.top) {
        contador++;
        let imgNueva = document.createElement('div');
        imgNueva.id = 'nodo' + contador;
        imgNueva.style.height = '20px';
        imgNueva.style.width = '20px';
        imgNueva.style.backgroundColor = 'white';
        imgNueva.style.position = 'absolute';
        imgNueva.style.top = img.style.top;
        imgNueva.style.left = img.style.left;
        imgNueva.style.boxSizing = 'border-box';
        imgNueva.style.border = '2px grey solid';

        snake.push(imgNueva);

        crearComida();
        actualizarPuntuacion();
        acelerar();

        return true;
    }
    return false;
}

