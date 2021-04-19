let result:unknown;

result = {

}
result = "ok";
result = 200;

console.log("=============");

const informacao: any = 150;

const infoDesconhecida: unknown = 250;

const primeiroNumero: number = informacao;
// const segundoNumero:number  = infoDesconhecida;
//Type 'unknown' is not assignable to type 'number'.ts(2322)

