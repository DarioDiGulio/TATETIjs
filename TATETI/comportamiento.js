var letraInicialObtenida;
var ultimaLetraJugada;
var contadorDeJugadas = 0;
var ganador           = '';
var CUADRANTE_UNO     = document.getElementById('1');
var CUADRANTE_DOS     = document.getElementById('2');
var CUADRANTE_TRES    = document.getElementById('3');
var CUADRANTE_CUATRO  = document.getElementById('4');
var CUADRANTE_CINCO   = document.getElementById('5');
var CUADRANTE_SEIS    = document.getElementById('6');
var CUADRANTE_SIETE   = document.getElementById('7');
var CUADRANTE_OCHO    = document.getElementById('8');
var CUADRANTE_NUEVE   = document.getElementById('9');

function obtenerLetraInicial() {
    let letraInicial;

    if (esPar(obtenerNumeroAleatoreo())) { 
        letraInicial = 'X';
        ultimaLetraJugada = 'X';
    } else {
        letraInicial = 'O';
        ultimaLetraJugada = 'O';
    }

    letraInicialObtenida = letraInicial;
}

function esPar(numero) {
    return numero % 2 === 0;
}

function obtenerNumeroAleatoreo() {
    return Math.random() * 10 + 1;
}

function jugada(id){
    if (estaVacio(id)) {
        if (!hayGanador()) {
            jugar(id);
            contadorDeJugadas = contadorDeJugadas + 1;
        } else {
            alert(ganador);
            felicitarGanador();
        }
    }
}

function estaVacio(id) {
    return document.getElementById(id).innerText === '';
}

function hayGanador() {
    
    if (contadorDeJugadas >= 4 ) {
        ganador = buscarGanadorFilaUno();
        ganador = buscarGanadorFilaDos();
        ganador = buscarGanadorFilaTres();
    }

    return ganador  !== '';
}

function buscarGanadorFilaUno() {
    if (CUADRANTE_UNO.innerText === CUADRANTE_DOS.innerText) {
        if (CUADRANTE_DOS.innerText === CUADRANTE_TRES.innerText) {
                ganador = CUADRANTE_DOS.innerText;
        }
    }    
}

function buscarGanadorFilaDos() {
    if (CUADRANTE_CUATRO.innerText === CUADRANTE_CINCO.innerText) {
        if (CUADRANTE_CINCO.innerText === CUADRANTE_SEIS.innerText) {
                ganador = CUADRANTE_CINCO.innerText;
        }
    }    
}

function buscarGanadorFilaTres() {
    if (CUADRANTE_SIETE.innerText === CUADRANTE_OCHO.innerText) {
        if (CUADRANTE_OCHO.innerText === CUADRANTE_NUEVE.innerText) {
            ganador = CUADRANTE_OCHO.innerText;
        }
    }    
}

function jugar(id) {
    if (ultimaLetraJugada === 'X') {
        document.getElementById(id).innerText = 'O';
        ultimaLetraJugada = 'O';
    } else {
        document.getElementById(id).innerText = 'X';
        ultimaLetraJugada = 'X';
    }
}

function felicitarGanador() {
    alert('El ganador es el jugador ' + ganador + ', ¡felicitaciones!');
}

function reiniciar() {
    let cuadrantes = document.getElementsByClassName('cuadrante');

    for (let i = 0; i < cuadrantes.length; i++) {
        cuadrantes[i].innerText = '';
    }

    ultimaLetraJugada = '';
    contadorDeJugadas = 0;
    ganador = '';
    obtenerLetraInicial();
}
