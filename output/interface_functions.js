"use strict";
let primeiraSoma;
primeiraSoma = (numero1, numero2) => {
    return numero1 + numero2;
};
console.log(primeiraSoma(3, 6));
let calculadora;
function multiplicacao(a, b) {
    return a * b;
}
const dividir = (a, b) => {
    return a / b;
};
calculadora = {
    somar: (num1, num2) => {
        return num1 + num2;
    },
    subtrair: function (num1, num2) {
        return num1 - num2;
    },
    multiplicar: multiplicacao,
    dividir //se o valor tem o mesmo nome do parametro basta declarar o parametro  
};
//# sourceMappingURL=interface_functions.js.map