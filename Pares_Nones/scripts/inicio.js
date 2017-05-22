


//Declaracion de una funcion
//function sumar () {}

function saludar () {
    let sSaludo = "Hola tio";
    console.log(sSaludo);
}



function sumarArg () {
    let nResult = 0;

    for (var i = 0; i < arguments.length; i++) {
        nResult += arguments[1];
    }
    return nResult;
}

function main () {
    let  nNum1 = Number (prompt ("Dime un numero"));
    let  nNum2 = Number (prompt ("Dime otro"));
    let nNum3 = +prompt("Dime otro");
    let nNum4 = +prompt("Dime otro");

    saludar()

    console.log (sumarArg (nNum1, nNum2, nNum3, nNum4, 3, 4, 16, 45, 56));
}

// Invocacion de la funcion

main ()