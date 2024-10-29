/**Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay */
import * as reader from "readline-sync";
let cantNeg: number = 0;
let cantPos: number = 0;
let cantCero: number = 0;
let cant: number = reader.questionInt("ingrese cantidad de valores que va a ingresar");
let arreglo: number[] = new Array(cant);

for (let i: number = 0; i < cant; i++) {
    arreglo[i] = reader.questionInt("ingrese un numero");
}
for (let i: number = 0; i < arreglo.length; i++) {
    switch:arreglo[i]{
        case (arreglo[i] < 0): cantNeg = cantNeg++;
        case (arreglo[i] > 0): cantPos = cantPos++;
        default: cantCero = cantCero++;
    }
}
console.log("cantidad de numeros negativos:"+cantNeg);
console.log("cantidad de numeros positivos:"+cantPos);
console.log("cantidad de ceros:"+cantCero);