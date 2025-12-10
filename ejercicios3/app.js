// Ejercicio 3 – Cajero automático
// Crea un programa que: simule un cajero automático. El usuario inicia con un saldo
// definido en una variable constante. Podrá retirar dinero varias veces mientras tenga
// fondos suficientes. Si intenta retirar más de lo que tiene, debe aparecer un mensaje de
// error y no permitir la transacción.

import prompt from "prompt-sync";

const inicio = prompt();

// Se crea una variable con el saldo fijo
let saldo = 100000

// Se inicia un ciclo while
while (true) {

    // Menu de usuario
    console.log("\nMenu \n1).Retiro \n2).Despositar \n3).Salir");
     
    // Ingreso de la opcion del usuario
    let op = parseInt(inicio(":) "));

    // Opcion de retiro
    if (op == 1){

        // Se solicita el monto a retirar
        let Retiro = parseInt(inicio("Cuanto va a retirar: "));
        // Se resta del saldo actual
        saldo = saldo - Retiro;

        // mustra el siguiente mensaje al usuario
        console.log("Se ha realizado la transaccion con exito");
        console.log("\n Queda un saldo de: "+ saldo);
    }

    // Opcion de deposito
    else if (op == 2){
        
        // Se pregunta el deposito a ingresar
        let deposito = parseInt(inicio("Ingrese el monto a despositar sin caracteres especialales: "));

        // Se suma al saldo actual
        saldo = saldo + deposito;

        // Se muetra el sigiente mensaje
        console.log("Se ha realizado con exito");
        console.log("Tiene un saldo de :" + saldo);
    }

    // Salir
    else if (op == 3){
        // Se muestra el siguiente mensaje al usuario y se rompe el ciclo
        console.log("\n Hasta la proxima");
        break   
    }

    // En caso de no ingresar alguna de las opciones
    else{
        console.log("Ingrese alguna de las opciones disponibles");
    }
}