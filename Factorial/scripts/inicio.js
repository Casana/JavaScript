let factorial = (pNumber) => {
    let nResult = 1;
    for (let i = pNumber; 1>i; i--) {
        nResult *= i;
    }
    return nResult;
}

let pNumber = prompt ("Dime un numero menor que 170")
console.log(factorial(pNumber))