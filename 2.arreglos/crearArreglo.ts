//1) Crear un arreglo de letras e imprimirlo
let arreglo: String[]= new Array(6);
arreglo=["s","a","l","e","i","u"];
console.log(arreglo);

//2) Dado un array con nombres de tamaño 5, pedir al usuario que ingrese un nombre y verificar si está
//  en el arreglo. Imprimir el arreglo y si está o no en él.
import * as reader from "readline-sync";
let nombres: String[]= new Array(5);
nombres=["miguel","juan","lucia","luca","micaela"];
const nombre: String = reader.question("Como te llamas?");
let esta:boolean|null=null;
let contador:number=0;
while (contador<nombres.length &&!esta){
    if (nombres[contador]===nombre){
        esta=true;
    }
    contador++
}
if (esta){
    console.log("estas en la lista: ");
} else {
    console.log("no estas en la lista: ");
}
console.log(nombres);
