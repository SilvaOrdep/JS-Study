/*Tipo de dados:

1- Primitivos (imutáveis) - string, number, boolean, undefined, null 
(bigint, symbol) - valores copiados, ou seja alocam um novo local na memória

2- Referência (mutável) - array, object, function - passados por referência, utilizam o mesmo local na memória
*/
let x = "Henrique"
let y = x
x = "Oliveira" // a var Y guardou em um novo local na memória o antigo valor de X
console.log(x);
console.log(y);

const a = {
  nome: 'Pedro',
  sobrenome: 'Silva'
};
const b = a;

b.nome = 'João';
console.log(a);
console.log(b);