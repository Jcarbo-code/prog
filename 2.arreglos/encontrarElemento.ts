/**Dado el siguiente arreglo        [4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable global y pasarlo a una función para determinar si es par o impar */

let arreglo: number[] = new Array();
arreglo = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let max: number = -1;
for (let i: number = 0; i<arreglo.length; i++) {
    if (arreglo[i] > max) {
        max = arreglo[i];
    }
}
console.log(max);
if (esPar(max)) {
    console.log("el numbero es par");
} else {
    console.log("el numbero es inpar");
}

function esPar(number): boolean {
    if (number / 2 === 0) {
        return true;
    } else return false;
}