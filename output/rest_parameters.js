"use strict";
//Permite passar parametros infinitos para a funcao de maneira bem mais limpa
function notasDaEscola(...notas) {
    //                  ...notas:(string | number)[]  -> para informar que pode ser ou string ou numero 
    return notas.reduce((notaTotal, notaAtual) => notaTotal + notaAtual, 0);
}
console.log(notasDaEscola(10, 5, 13, 12, 4));
//# sourceMappingURL=rest_parameters.js.map