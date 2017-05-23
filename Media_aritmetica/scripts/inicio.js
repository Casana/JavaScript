//Media aritmética de n números 




function mediaArg () {
    let nResult = 0;

    for (var i = nNum1; i < arguments.length; i++) 
    {
        nResult = arguments[1] / arguments.length ;
    }
    return nResult;
}

document.write(mediaArg(nResult))

function main () {
    let  nNum1 = Number (prompt ("Dime un numero"));
    let  nNum2 = Number (prompt ("Dime otro"));
    let nNum3 = +prompt("Dime otro");
    let nNum4 = +prompt("Dime otro");

    mediaArg()

}

main ()
