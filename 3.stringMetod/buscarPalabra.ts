/**Utilizar un método de string para buscar una palabra en un párrafo e indicar cuantas veces se encontró:
//completar la función para que devuelva la cantidad de veces que searchTerm aparece dentro de fullText
function howManyTextInPara(fullText: string, searchTerm: string): number {}*/
import * as reader from "readline-sync";

const paragraph: string =
  "Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes.   Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿Cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca?   ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a   la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía.   Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia.   En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";

let searchTerm: string;

searchTerm=reader.questionInt("ingrese la palabra a buscar");

//devuelve true si searchTerm se encuentra en fullText
function isTextInPara(fullText: string, searchTerm: string): boolean {
  return fullText.toLowerCase().includes(searchTerm.toLowerCase());
}
let paragraphLower: string = paragraph.toLocaleLowerCase();
let splits: string[] = paragraphLower.split(searchTerm.toLocaleLowerCase());
console.log("cantidad de veces que aparece la palabra " + searchTerm + " es: " + (splits.length - 1));