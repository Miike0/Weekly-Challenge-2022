/*
 * Reto #29
 * ORDENA LA LISTA
 * Fecha publicación enunciado: 18/07/22
 * Fecha publicación resolución: 26/07/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro adicional
 *   "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function sort (arrayNumbers, sortType) {
    let aux = 0;

    for (let i = 0; i < arrayNumbers.length; i++){
        for (let j = 0; j < arrayNumbers.length; j++) {
            if (sortType === 'Asc') {
                if (arrayNumbers[i] < arrayNumbers[j]) {
                    aux = arrayNumbers[i];
                    arrayNumbers[i] = arrayNumbers[j];
                    arrayNumbers[j] = aux; 
                }
            }
            if (sortType === 'Desc') {
                if (arrayNumbers[i] > arrayNumbers[j]) {
                    aux = arrayNumbers[i];
                    arrayNumbers[i] = arrayNumbers[j];
                    arrayNumbers[j] = aux; 
                }
            }
        }
    }

    return arrayNumbers;
}

function main () {
    console.log(sort([4,6,1,8,2], 'Asc'));
    console.log(sort([4,6,1,8,2], 'Desc'));
}
main();