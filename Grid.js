'use strict'

let startBox = document.getElementById('grid');
let contentBox = document.createElement('div');
contentBox.id = 'contentBox';

startBox.append(contentBox);

let bounds = {
    min: 0,
    max: 500
};
