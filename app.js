// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosSorteados = [];
let listaDeAmigos = document.getElementById('listaAmigos');
let amigoGanador = document.getElementById('resultado');
let nuevoSorteoAmigo = document.getElementById('nuevo');

// funcion para capturar el valor del input y agregarlo a la lista
function agregarAmigo() {
    
    let amigosSorteados = document.getElementById('amigo');
    // verifica la repeticion de un nombre
    if(listaAmigosSorteados.includes(amigosSorteados.value)){
        alert('El nombre ya fue ingresado');
    } else if(amigosSorteados.value){ 
        listaAmigosSorteados.push(amigosSorteados.value);
        listaDeAmigos.innerHTML += `${amigosSorteados.value} <br>`;
    } else { // verifica si el input esta vacio
        alert('Por favor, ingresa un nombre');
    }
    limpiarCaja();

}

function actualizarAmigo() {

    listaDeAmigos.innerHTML = '';
    for(let i = 0; i < listaAmigosSorteados.length; i++) {
        let amigoAgregado = document.createElement('li'); // crear elemento <li>
        amigoAgregado.textContent = `${listaAmigosSorteados[i]}`; // agrega amigo
        listaDeAmigos.appendChild(amigoAgregado); // se añade a la lista de amigos
    }

}

// funcion para sortear un amigo de la lista tomando el índice aleatorio
// y mostrar el resultado en la pantalla
function sortearAmigo() {

    if(listaAmigosSorteados.length >=2) {
        let amigoSorteado = Math.floor(Math.random()*listaAmigosSorteados.length);
        amigoGanador.innerHTML = `El amigo secreto es ${listaAmigosSorteados[amigoSorteado]}🎉`;
    } else {
        alert('Por favor, agrega por lo menos 2 nombres');
    }

}

// funcion para limpiar el input
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// funcion para reiniciar el juego
// volviendo las variables a su estado inicial
function nuevoSorteo() {

    listaAmigosSorteados = [];
    amigoGanador.innerHTML = '';
    listaDeAmigos.innerHTML = '';

}
