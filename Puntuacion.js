let puntuacionMaxima = getMaxPoints();
let puntuacionAnterior = '0';
let puntuacionActual = '0';

function puntuacionBase() {
    document.getElementById('pActual').value = puntuacionActual;
    document.getElementById('pAnterior').value = puntuacionAnterior;
    if (localStorage.getItem('puntuacion') != null)
        document.getElementById('pMaxima').value = localStorage.getItem('puntuacion');
    else
        document.getElementById('pMaxima').value = '0';
}

function actualizarPuntuacion() {
    puntuacionActual = parseInt(puntuacionActual + 100);
    document.getElementById('pActual').value = puntuacionActual;
}

function guardarPuntuaciones() {
    puntuacionAnterior = puntuacionActual;
    document.getElementById('pAnterior').value = puntuacionAnterior;
    puntuacionActual > puntuacionMaxima ? obtenerMaxPoints() : false;
    puntuacionActual = '0';
    document.getElementById('pActual').value = puntuacionActual;
}

function guardarMaxima(e, nombreJugador) {
    e.maxPoints.nombreJugador = nombreJugador;
    e.maxPoints.puntos = puntuacionActual;    
}

function obtenerMaxPoints(){

    let nombreJugador = prompt("Has lograda la maxima puntuacion, introduce tu nombre");

    let url = 'https://abelvelarde.github.io/maxPoints.json';

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    
    request.onload = function(){
        puntuacionMaxima = request.response.puntos;
    }
}

function getMaxPoints(){
    let url = 'https://abelvelarde.github.io/maxPoints.json';
    
    let maxPoints = 0;

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    
    request.onload = function(){
        request.response.puntos = puntuacionActual;
        request.nombreJugador = nombreJugador;
    }

    return maxPoints;
}