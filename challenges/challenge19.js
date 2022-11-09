/*
 * Reto #20
 * PARANDO EL TIEMPO
 * Fecha publicación enunciado: 16/05/22
 * Fecha publicación resolución: 23/05/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea una función que sume 2 números y retorne su resultado pasados unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma asíncrona, es decir, sin detener la ejecución del programa principal. Se podría ejecutar varias veces al mismo tiempo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
function sum (num1, num2) {
    return num1 + num2;
}

function asyncSum (num1, num2, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(sum(num1,num2));
        }, timeout);
    });
}


async function asyncCall () {
    const result = await asyncSum(10,10,3000);
    console.log(result);
    const result2 = await asyncSum(15,100,5000);
    console.log(result2);
    const result3 = await asyncSum(1000,1,10000);
    console.log(result3);
}
asyncCall();