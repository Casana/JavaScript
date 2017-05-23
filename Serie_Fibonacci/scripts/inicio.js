//Serie Fibonacci: Empenzando por 0 y 1, cada término es la suma de los dos números anteriores de la serie.

var i;
var fib = [];
iterar = prompt("¿Cuantas iteraciones quieres?");
fib[0] = 0;
fib[1] = 1;
document.write(fib[0] + " ");
document.write(fib[1] + " ");
for (i = 2; i <= iterar; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    document.write(fib[i] + " ")
}