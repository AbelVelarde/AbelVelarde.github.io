let puntuacionMaxima = '0';
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
    puntuacionActual > puntuacionMaxima ? guardarMaxima() : false;
    puntuacionActual = '0';
    document.getElementById('pActual').value = puntuacionActual;


}

function guardarMaxima() {
    puntuacionMaxima = puntuacionActual;
    localStorage.setItem('puntuacion', puntuacionMaxima);
    document.getElementById('pMaxima').value= localStorage.getItem('puntuacion');
    
}