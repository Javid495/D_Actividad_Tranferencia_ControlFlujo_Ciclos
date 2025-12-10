// Ejercicio 8 – Control de acceso
// Crea un programa que: solicite un usuario y contraseña. El programa debe permitir hasta
// 3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. Si
// acierta, mostrar “Bienvenido”.

import prompt from "prompt-sync";

const inicio = prompt();

// Se crean la variables a usar
let usuarioAsig = "javid49";

let contraAsig = "12345"

let intentos = 1;

// Se inicialia el ciclo while que finaliza cuando acaben los intentos
while ( intentos <= 3){

    // Se solicita el nickname al usuario
    let usuario = inicio("Ingrese su usuario: ").toLowerCase();
    // Se solciita la contraseña al usuario
    let contraseña = inicio("Ingrese la contraseña: ");

    // Se verifica que tanto el usuario como la contraseña esten correctos
    if (usuario == usuarioAsig && contraseña == contraAsig){

        console.log("Bienvenido al sistema =D");
        break
    }
    // Si no se muestra el mensaje y se añade un intento al contador
    else{
        console.log("Usuario o contraseña incorrectos por favor intente nuevamente");
        intentos +=1; 
    }

}

// Se muestra si termina los numeros de intentos
console.log("\nNumero maximo de intentos permitidos intentelo otro dia");
