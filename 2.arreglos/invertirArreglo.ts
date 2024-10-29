/**Almacene en un arreglo de tamaño N los números ingresados por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero*/
import * as reader from "readline-sync";
let cant:number=reader.questionInt("ingrese cantidad de valores que va a ingresar");
let arreglo: number[] = new Array(cant);

for (let i: number = 0; i<arreglo.length; i++){
    arreglo[i]=reader.questionInt("ingrese un numero");
}
for (let i: number = arreglo.length; i>0; i--){
    console.log(arreglo[i]);
}