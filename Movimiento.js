'use strict'

let varCont = false;
let vel = 100;
let mov = 20;

let comprobarReloj = true;

function comprobarMover() {
    comprobarReloj = true;
    varCont ? moverse() : false;
}

function moverse() {
    
    switch (dir) {
        case 1: {
            moveUp();
            break;
        }
        case (2): {
            moveDown();
            break;
        }
        case (3): {
            moveRight();
            break;
        }
        case (4): {
            moveLeft();
            break;
        }
    }
    
    setTimeout(() => comprobarMover(), vel);
}

function moveUp() {
    let haComido = comer();
    haComido ? addUp() : false;
    snake.length > 1 ? actualizarPos() : false;
    
    snake[0].style.top = parseInt(snake[0].style.top) - mov + 'px';
    if (parseInt(snake[0].style.top) < bounds.min) {
       perder();
    }

    comprobarPerder();
}

function addUp() {
    snake[contador].style.top = (parseInt(snake[contador - 1].style.top) + 20 + 'px');
    snake[contador].style.left = (snake[contador - 1].style.left + 'px');
    contentBox.append(snake[contador]);
}


function moveDown() {
    let haComido = comer();
    haComido ? addDown() : false;
    snake.length > 1 ? actualizarPos() : false;

    snake[0].style.top = parseInt(snake[0].style.top) + mov + 'px';
    if (parseInt(snake[0].style.top) >= bounds.max) {
       perder();
    }

    comprobarPerder();
}

function addDown() {
    snake[contador].style.top = (parseInt(snake[contador - 1].style.top) - 20 + 'px');
    snake[contador].style.left = (snake[contador - 1].style.left + 'px');
    contentBox.append(snake[contador]);
}


function moveRight() {
    let haComido = comer();
    haComido ? addRight() : false;
    snake.length > 1 ? actualizarPos() : false;

    snake[0].style.left = parseInt(snake[0].style.left) + mov + 'px';
    if (parseInt(snake[0].style.left) >= bounds.max) {
        perder();
    }

    comprobarPerder();
}

function addRight() {
    snake[contador].style.top = (snake[contador - 1].style.top + 'px');
    snake[contador].style.left = (parseInt(snake[contador - 1].style.left) - 20 + 'px');
    contentBox.append(snake[contador]);
}

function moveLeft() {
    let haComido = comer();
    haComido ? addLeft() : false;
    snake.length > 1 ? actualizarPos() : false;

    snake[0].style.left = parseInt(snake[0].style.left) - mov + 'px';
    if (parseInt(snake[0].style.left) < bounds.min) {
        perder();
    }
    comprobarPerder();
}

function addLeft() {
    snake[contador].style.top = (snake[contador - 1].style.top + 'px');
    snake[contador].style.left = (parseInt(snake[contador - 1].style.left) + 20 + 'px');
    contentBox.append(snake[contador]);
}

function actualizarPos() {
    let j;
    for (j = snake.length - 1; j > 0; j--) {
        snake[j].style.top = (snake[j - 1].style.top);
        snake[j].style.left = (snake[j - 1].style.left);
    }
}

function acelerar() {
    vel = vel - 1;
}









