//Comando para que podamos pedir los numeros por consola y usar prompt
const prompt = require('prompt-sync')();

//Pedimos los números y los relacionamos con sus respectivas variables
let numero1 = Number(prompt("Digitá el número 1 -> "));
let numero2 = Number(prompt("Digitá el número 2 -> "));
let numero3 = Number(prompt("Digitá el número 3 -> "));


//1. Validar si los números son iguagles
if (numero1 === numero2 && numero2 === numero3 && numero3 === numero1) {
    //Mensaje de alerta si lo son
    console.log("Números iguales");
    console.log(`${numero1}, ${numero2}, ${numero3}`);

    //Si no son iguales organizamos 
} else {

    //Validamos primero que  a numero 1 para organizar
    if (numero1 >= numero2 && numero2 >= numero3) {
        console.log("De mayor a menor:", numero1, numero2, numero3);
        console.log("De menor a mayor:", numero3, numero2, numero1);

    } else if (numero1 >= numero3 && numero3 >= numero2) {
        console.log("De mayor a menor:", numero1, numero3, numero2);
        console.log("De menor a mayor:", numero2, numero3, numero1);
        // Validamos número 2 para dar orden
    } else if (numero2 >= numero1 && numero1 >= numero3) {
        console.log("De mayor a menor:", numero2, numero1, numero3);
        console.log("De menor a mayor:", numero3, numero1, numero2);
    } else if (numero2 >= numero3 && numero3 >= numero1) {
        console.log("De mayor a menor:", numero2, numero3, numero1);
        console.log("De menor a mayor:", numero1, numero3, numero2);

        //Validamos número 3 
    } else if (numero3 >= numero1 && numero1 >= numero2) {
        console.log("De mayor a menor:", numero3, numero1, numero2);
        console.log("De menor a mayor:", numero2, numero1, numero3);
    } else if (numero3 >= numero2 && numero2 >= numero1) {
        console.log("De mayor a menor:", numero3, numero2, numero1);
        console.log("De menor a mayor:", numero1, numero2, numero3);
    } else {
        console.log("Agregaste un número de más")
    }
}