function Fibonacci(num) {
    let num1 = 0, num2 = 1, sigNum;
    console.log("Secuencia Fibonacci: ");
    for (let i = 1; i <= num; i++) {
        console.log(num1);
        sigNum = 1 + num2
        num1 = num2
        num2 = sigNum
    }
}
const cantIteración = prompt("Ingrese la cantidad de terminos de la secuncia: (numero positivo) ")
Fibonacci(cantIteración)