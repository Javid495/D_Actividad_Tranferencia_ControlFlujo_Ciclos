// Ejercicio 1 – Números primos
// Crea un programa que: muestre todos los números primos entre 1 y 50. Utiliza ciclos y
// condicionales para verificar qué números cumplen la condición de ser primos.

import inicio from "prompt-sync";

const prompt = inicio();

//Se solicita al usuario la cantidad de numeros
let Numeros = parseInt(prompt("Ingrese la cantidad de numeros: "));

//Iniciamos un ciclo for
for (let i = 1; i <= Numeros; i++) { 
  
  //Verificamos e imprimimos los numeros que sean primos
  if (i % 2 == !0 && i % 3 == !0) {
      console.log("Numeros Primos: " + i);
   }
}