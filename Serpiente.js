'use strict'

let contador = 0;

let img = document.createElement('div');
img.id = 'nodo' + contador;
img.style.height = '20px';
img.style.width = '20px';
img.style.backgroundColor = 'red';
img.style.position = 'absolute';
img.style.top = '0px';
img.style.left = '0px';
img.style.boxSizing = 'border-box';
img.style.border = '2px grey solid';

let snake = [img];

contentBox.append(snake[0]);