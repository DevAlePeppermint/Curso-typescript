// ****INTERFACE VOLTADA PARA FUNÇÃO****
interface ISoma {
    (num1: number, num2: number): number;
}

let primeiraSoma:ISoma; 
primeiraSoma = (numero1:number, numero2:number):number => {
    return numero1 + numero2;
}
console.log(primeiraSoma(3,6));

// ****INTERFACE VOLTADA PARA METODOS****
 interface ICalculos {
     somar(a:number, b:number):number;
     subtrair(a:number, b:number):number;
     multiplicar(a:number, b:number):number;
     dividir(a:number, b:number):number;
 }

 let calculadora:ICalculos;

 function multiplicacao(a:number, b:number):number {
     return a * b;
}

const dividir = (a:number, b:number):number => {
   return a/b
}
 calculadora = {
    somar: (num1:number, num2:number):number => {
        return num1 + num2
    },

    subtrair: function (num1:number, num2:number):number {
        return num1 - num2
    },

    multiplicar: multiplicacao,

    dividir //se o valor tem o mesmo nome do parametro basta declarar o parametro  
 }