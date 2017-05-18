


//Declaracion de una funcion
//function sumar () {}

function saludar () {
    let sSaludo = "Hola tio";
    console.log(sSaludo);
}



function Media () {
    let nResult = 0;

    for (var i = 0; i < arguments.length; i++) {
        nResult += arguments[1];
    }
    return nResult/arguments.length;
}

function main () {
    let nNum1 = Number (prompt ("Dime un numero"));
    let nNum2 = Number (prompt ("Dime otro"));
    let nNum3 = +prompt("Dime otro");
    let nNum4 = +prompt("Dime otro");

    saludar()

    console.log (Media (nNum1, nNum2));
    console.log (Media (nNum1, nNum2, nNum3,));
    console.log (Media (nNum1, nNum2, nNum3, nNum4, 3, 3, 3,));
    console.log (Media (nNum1, nNum2, nNum3, nNum4, 12, 12, 12, 12, 12));
}

// Invocacion de la funcion

main ()