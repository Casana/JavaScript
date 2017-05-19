function main () {

    let sumar = (a, b) => {
            return +a + +b;}

    let restar = (a, b) => {
            return a - b;}

    let multiplicar = (a, b) => {
            return a * b;}

    let dividir = (a, b) => {
            return a / b;}

    let operacion = (nNum1, nNum2, oPreg) => {
    if (oPreg=="s") {
        return sumar (nNum1, nNum2)
        }
     else if (oPreg=="r") {
         return restar (nNum1, nNum2)
        }
     else if (oPreg=="m") {
         return multiplicar (nNum1, nNum2)
        }
     else if (oPreg=="d") {
         return dividir (nNum1, nNum2) 
        }
    else { result= NaN}

}


let mostrarDatos = (pRespuesta) => {
    if (isNaN(pRespuesta)){
        console.log("Operación no soportada");
    } else {
        console.log ("El resultado es $(pRespuesta)");
    }
}


}


    let  nNum1 = Number (prompt ("Dime un numero"));
    let  nNum2 = Number (prompt ("Dime un segundo numero"));
    let  oPreg = prompt ("Dime que operacion quieres realizar");


    calcular()

    let pRepuesta = operacion (result.nNum1, result.nNum2,result.oPreg)

    console.log(sRespuesta);

}

// Invocacion de la funcion

main ()