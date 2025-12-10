// Ejercicio 6 – Juego del adivinador
// Crea un programa que: genere un número aleatorio entre 1 y 20. El usuario intentará
// adivinarlo y el ciclo repetirá los intentos hasta que lo logre. Cada vez que falle, el
// programa debe indicar si el número buscado es mayor o menor que el ingresado.

import prompt from "prompt-sync";

const inicio = prompt();

// Se genera un numero aleatorio entre 1 a 20
let numero = Math.floor(Math.random()*20) + 1;

// Se muetra un mensaje al usuario de incio
console.log("hora de inciar la adivinansa del dia =D");

// se incia el ciclo
while (true) {
    // Se pregunta un numero al usario
    let num = parseInt(inicio("\nIngrese un numero entre 1 a 20: "))

    // Se el numero es mayor al seleccionado entonces
    if (num > numero){

        console.log("El numero que ingresaste es mayor al numero seleccionado.");
    }

    // Si es menor al selecciona entonces
    else if (num < numero){
        console.log("El numero ingresado es menor al numero selecionado");
    }

    // si el numero ingresado es igual al seleccionado
    else if (num === numero){

        console.log("Felicidades has ingresado el numero correcto siendo el " + numero);
        break
    }

    // Si no se ingreso un numero
    else {
        console.log("Por favor ingrese un numero");
    }
    
}