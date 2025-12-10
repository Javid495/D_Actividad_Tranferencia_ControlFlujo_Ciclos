// Ejercicio 2 – Tabla de multiplicar personalizada
// Crea un programa que: dado un número ingresado por el usuario, muestre su tabla de
// multiplicar hasta el 12. El ciclo debe permitir repetir el proceso si el usuario desea
// consultar otra tabla.

import prompt from "prompt-sync";

const inicio = prompt();

while (true) { 

  // Menu de usuario
  console.log("\nMenu de usuario \n1). mostrar tabla \n2). Salir");
  let op = parseInt(inicio("): "));

  // concicional de la opcion 1
  if (op == 1) { 

    // se solicita el numero
    let num = parseInt(inicio("Ingrese un numero:"))

    // se muestra el mensaje de la tabla que va a aparecer
    console.log("Tabla del numero: " + num);
    // Se ejecuta el ciclo el cual realizara la tabla
    for (let i = 1; i <= 10; i++) { 
      
      // se haen la multiplicaciones
      let mult = num * i;
      // Se muestra cada resultado
      console.log(`${num} * ${i} = ${mult}`);
    }
  }

  // Para salir
  else if (op == 2) { 
    // Se muestra un mensaje
    console.log("Hasta la proxima");
    break
  }

  else { 
    console.log("Seleccione alguna de las opciones disponibles");
  }
}