//implemente un bubblesort para ordenar un arreglo X descendente
function ordenarDesc(array: number[]): number[] {
    let ordenado: number[] = array;
    for (let i = 0; i < ordenado.length - 1; i++)
    for (let j = 0; j < ordenado.length - i - 1; j++)
    if (ordenado[j] < ordenado[j + 1]) {
            let temp = ordenado[j];
        ordenado[j] = ordenado[j + 1];
        ordenado[j + 1] = temp;
    }
    return ordenado;
}