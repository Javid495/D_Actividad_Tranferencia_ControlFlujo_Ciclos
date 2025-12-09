// Ejercicio 2 – Tabla de multiplicar personalizada
// Crea un programa que: dado un número ingresado por el usuario, muestre su tabla de
// multiplicar hasta el 12. El ciclo debe permitir repetir el proceso si el usuario desea
// consultar otra tabla.

import prompt from "prompt-sync";

const inicio = prompt();

while (true) { 

  console.log("\nMenu de usuario \n1). mostrar tabla \n2). Salir");
  let op = parseInt(inicio("): "));

  if (op == 1) { 

    let num = parseInt(inicio("Ingrese un numero:"))

    console.log("Tabla del numero: " + num);
    for (let i = 1; i <= 10; i++) { 
      
      let mult = num * i;
      console.log(mult);
    }

  }

  else if (op == 2) { }

  else { }


}