/*pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad`
Al final, debes determinar qué torta tiene el mayor puntaje. Y si hay empate indicar que se produjo empate.

## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje para determinar la torta con el mayor puntaje.*/

import * as reader from "readline-sync";
determinarGanador();

function determinarGanador() {
    let cant: number = reader.questionInt("¿Cant participantes?");
    let varn: number = 0;
    let x: number = 1;
    let mejorpunt: number = 0;
    let mejorparticip: number = 0;
    let puntaje: number;
    let empate: boolean = false;

    while (x <= cant) {
        let s: number = 0, p: number = 0, d: number = 0;

        while (s < 1 || s > 5) {
            s = reader.questionInt("Indicar del 1 al 5 el sabor de la torta del participante " + x);
        }

        while (p < 1 || p > 5) {
            p = reader.questionInt("Indicar del 1 al 5 la presentación de la torta del participante " + x);
        }

        while (d < 1 || d > 5) {
            d = reader.questionInt("Indicar del 1 al 5 la dificultad de la torta del participante " + x);
        }

        puntaje = calcularPuntaje(s, p, d);

        if (mejorpunt < puntaje) {
            mejorpunt = puntaje;
            mejorparticip = x;
            empate = false;
        } else if (mejorpunt === puntaje) {
            empate = true;
        }

        x++;
    }

    if (empate) {
        console.log("Hubo empate");
    } else {
        console.log("Ganó el participante n°" + mejorparticip + " con " + mejorpunt + " puntos");
    }
}

function calcularPuntaje(sabor: number, presentacion: number, dificultad: number): number {
    let s: number = sabor;
    let p: number = presentacion;
    let d: number = dificultad;
    return (s + p + d) / 3;
}