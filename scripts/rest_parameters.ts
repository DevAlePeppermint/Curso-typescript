//Permite passar parametros infinitos para a funcao de maneira bem mais limpa

function notasDaEscola (...notas:number[]):number {
    //                  ...notas:(string | number)[]  -> para informar que pode ser ou string ou numero 

    return notas.reduce((notaTotal:number, notaAtual:number) =>

        notaTotal + notaAtual, 0

     );
}

console.log(notasDaEscola(10, 5, 13, 12, 4))
