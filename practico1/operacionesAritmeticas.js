let var1 = 12;
let var2 = 10;
let var3 = 4;
let var4 = 6;

let suma = var1 + var2;

let resta = var4 - var3;

let resultadoFinal = suma * resta;

let esPar = (resultadoFinal % 2) == 0;

let mensaje = "mis variables iniciales fueron: " + var1 + ", " + var2 + ", " + var3 + ", " + var4 + ". La respuesta a verificar si el resultado final es par es: " + esPar;

console.log(mensaje)