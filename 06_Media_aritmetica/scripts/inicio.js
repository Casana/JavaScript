//Media aritmética de i números 

function media() {
    var n = 0;

    for (var i = 0, max = arguments.length; i < max; i++) {
        n += arguments[i];
    }
    return n / max;
};
document.write("Para los siguientes números 5, 12, 23, 28, 30, 31 la media es: " + media(5, 12, 23, 28, 30, 31));
document.write(" Para los siguientes números 5, 23, 45, 66, 100 la media es: " + media(5, 23, 45, 66, 100));
document.write(" Para los siguientes números 5, 25, 85, 124 la media es: " + media(5, 25, 85, 124))