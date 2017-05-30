let pNumber = prompt("Dime un numero menor que 170");

var nResult = 1;
for (var i = 1; i <= pNumber; i++) {
    nResult *= i;
}


document.write("El factorial de " + pNumber + " es " + nResult)