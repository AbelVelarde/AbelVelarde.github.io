'use strict'

let dir = 2;

function eventosTeclados() {
    window.addEventListener('keydown', (e) => {
        e.keyCode == 27 ? varCont = false :
            e.keyCode == 13 && varCont == false ? continuar() :
                e.keyCode == 38 ? cambiarDir(1) :
                    e.keyCode == 40 ? cambiarDir(2) :
                        e.keyCode == 39 ? cambiarDir(3) :
                            e.keyCode == 37 ? cambiarDir(4) :
                                false;
    })
}

function cambiarDir(n) {
    if (comprobarReloj == true) {
        comprobarReloj =false;
        if (n == 1 && dir != 2) {
            dir = 1;
        }
        else if (n == 2 && dir != 1) {
            dir = 2;
        }
        else if (n == 3 && dir != 4) {
            dir = 3;
        }
        else if (n == 4 && dir != 3) {
            dir = 4;
        }
    }
}

function continuar() {
    varCont = true;
    comprobarMover();
}