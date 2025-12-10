// Ejercicio 4 – Promedio de notas
// Crea un programa que: lea las notas de 5 estudiantes. Calcula el promedio de cada uno y
// determina, mediante condicionales, si aprueba (nota ≥ 3.0) o reprueba. Usa ciclos para
// ingresar los datos de manera ordenada.

import prompt from "prompt-sync";

const inicio = prompt();

// Se pregunta el numero de estudiantes
let estudiantes = parseInt(inicio("Cuantos estudiantes va a ingresar: "));

// Se inicializa un ciclo for 
for (let i = 1; i <= estudiantes; i++){
    
    //Se restablece la variable de notas a 0 cada ciclo
    let nota = 0;
    //Se muesta el siguiente mensaje
    console.log("\n Notas del estudiante # " + i);
    
    //Se inicialia el ciclo for 
    for (let i = 1; i <= 3; i++){
        //Se solicita la nota del estudiante
        let notaE = parseInt(inicio("Ingrese la nota # "+ i + " :"));
        // Se suma la notas
        nota += notaE
    }

    // Se saca el promediode la notas
    nota = Math.round(nota / 3, 2);

    // Se muestra el promedio final del usuario
    console.log(`El promedio de notas del estudiante #${i} es ${nota}`);

    // Se define el promedio
    if (nota >= 3.0){
        console.log("El estudiante aprobo");
    }
    else{
        console.log("El estudiante no aprobo");
    }
}