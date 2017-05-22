//Calculadora en un único objeto (para que esté mejor estructurada)
//Creación de la función Calculadora y ejecución de la misma.

Calculadora = {
    oDatox: {
        num1 : {
            valor : 25,
            msg: "Escribe un numero"
        },
        num2 : {
            valor : 25,
            msg: "Escribe otro numero",
            pRespuesta
        }
    },
    sOperacion : {
        valor: "s",
        msg: "Selecciona <s>uma, <r>esta, <m>ultiplicación, <d>ivisión",
    },
    sRepuesta : {
        valor:"" ,
        aMsg: [
            "Operación no soportada",
            "El resultado es",
        ]
    },
    sumar : (a, b) => {
            return +a + +b;},

    restar : (a, b) => {
            return a - b;},

    multiplicar : (a, b) => {
            return a * b;},

    dividir : (a, b) => {
            return a / b;},

    calcular : function (nNum1, nNum2, pOp) {

            let result = 0;
            switch (pOp) 
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


// this se usa para hacer una referencia al objeto dentro del que estoy (en este caso calculadora)

pedirDatos : () => {

    this.oDatox.num1.valor = prompt(this.oDatox.num1.msg,
                                    this.oDatox)
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

    let sRepuesta = operacion (result.nNum1, result.nNum2,result.oPreg)

    console.log(sRespuesta);

}
