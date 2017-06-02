// Numeros primos del 1 al 100

var i, j, nPrimo;
for (i = 2; i <= 100; i++) {
    nPrimo = true;
    j = 2

    // En lugar de anidar un for, el segundo for se sustituye por un while 

    while (j < i && nPrimo) {
        nPrimo = (i % j++ == 0 ? false : nPrimo);
    }
    if (nPrimo) {
        document.write(i);
        document.write("<br>")
    }
}


function saludar() {
    let sSaludo = "¡Hola a todos! Estos son los numeros primos del 1 al 100";
    console.log(sSaludo);
}
saludar()