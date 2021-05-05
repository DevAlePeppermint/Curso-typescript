// let endereço:object;

// endereço = {

//     endereço: "Av. Paulista",
//     numero:100,
// }

// endereço = {

//     logradouro: "Av. Paulista",
//     nro:100,
// }
// O TS está validando somente o tipo "object" nesse caso. Note que ele não apita para a mudança nos objetos



interface IEndereço {
    logradouro: string;
    numero: number;
    cidade: string;
    estado: string;
}

let endereço: IEndereço;

// endereço = {

//     endereço: "Av. Paulista",
// Object literal may only specify known properties, and 'endereço' does not exist in type 
// '{ logradouro: string; numero: number; cidade: string; estado: string; }
//     numero:100,
// }

endereço = {

    logradouro: "Av. Paulista",
    numero: 100,
    cidade: "São Paulo",
    estado: "São Paulo,"

}