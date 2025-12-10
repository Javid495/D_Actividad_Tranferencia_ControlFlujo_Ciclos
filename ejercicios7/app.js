// Ejercicio 7 – Contador de pares e impares
// Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos
// fueron pares y cuántos impares.

import prompt from "prompt-sync";

const inicio = prompt();

// se inicializan acumuladores para determinar la cantidad de pares o impares
let cont_pares = 0;
let cont_impares = 0;

// se inicializa un ciclo for
for (let i = 1; i <= 10 ; i++){

    // Se pregunta la cantidad de numeros
    let num = parseInt(inicio("Ingrese el numero #" + i + " :"));

    // Se verifica si el nmero ingresado es par
    if (num % 2 == 0){
        cont_pares += 1;
    }

    // O impar
    else {
        cont_impares += 1;
    }

}

// Se muestran los resultados
console.log("La cantidad de numeros pares ingresados por el usuario es de:" + cont_pares);
console.log("La cantidad de numeros impares ingresados por el usuario es de: " + cont_impares);



