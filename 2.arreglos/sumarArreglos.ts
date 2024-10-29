/**Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario */
import * as reader from "readline-sync";

let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let arregloSuma: number[] = new Array(6);

for (let i: number = 0; i<arreglo1.length; i++){
    arreglo1[i]=reader.questionInt("ingrese un numero");
}
console.log("ahora el segundo arreglo");
for (let i: number = 0; i<arreglo2.length; i++){
    arreglo2[i]=reader.questionInt("ingrese un numero");
}
for (let i: number = 0; i<arreglo1.length; i++){
    arregloSuma[i]=arreglo1[i]+arreglo2[i];
}
console.log("suma de ambos:");
console.log(arregloSuma);