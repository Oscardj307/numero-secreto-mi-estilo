//Variables
let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Iniciar el juego y dando instrucciones
condicionesIniciales();


function condicionesIniciales() {
    asignarTextoElemento ('h1', 'Juego del numero secreto'); 
    asignarTextoElemento ('p', `Indica un numero del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Nucleo del juego, revisar los intentas, va al boton
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Has acertado en ${(intentos===1) ? 'tu primer' : intentos} ${(intentos===1) ? 'intento!' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if ( numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El numero es menor');
        } else {
            asignarTextoElemento ('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
// Limpia la caja despues de cada intento
function limpiarCaja () {
    document.querySelector('#valorUsuario').value='';
}
//Genera un numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else {

        //Si el numero generado esta en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    
    
}


}
