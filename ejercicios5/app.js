// Ejercicio 5 – Tienda de productos
// Crea un programa que: simule la venta de productos. El usuario podrá registrar la compra
// de varios artículos hasta que decida no comprar más. Se debe calcular el total de la
// compra y aplicar un descuento del 10% si el valor supera los $100.000.

import prompt from "prompt-sync";

const inicio = prompt();

let carrito = 0;

while (true){

    // Menu de usuario
    console.log("\nMenu de usuario \n1.Añadir producto \n2.Realiar compra");

    // Opcion ingresada
    let op = parseInt(inicio("):"))

    // para agrager cosas al carrito
    if (op == 1){

        //se pregunta el precio del producto
        let valor = parseInt(inicio("Cual es el precio del producto? :"));

        // Se suma al carrito
        carrito += valor;

        // Se muestra el total actualmente
        console.log("Actualmente el valor de la compra es de: " + carrito);
    }

    // Terminar compra
    else if (op == 2){

        // Si el total es mayor a 100000
        if (carrito >= 100000){

            // Se muestra un mensaje para aplicar un descuento
            console.log("\nSe aplica un descuente del 10%");
            carrito = carrito - (carrito * 0.10);
        }

        // Total compra
        console.log("LA compra total de los productos es de: " + carrito);

        // Se rompe el ciclo
        break
    }

    // En caso de no seleccionar alguna de las opciones
    else{
        console.log("Seleccione alguna de las opciones disponibles");
    }

}