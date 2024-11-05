/* Funções:

function name() {
  x
  y
  z
}
É possível fazer a função retornar um valor em uma variável EX:
*/

function saudacao(nome) {
  return `Bom dia ${nome}`;
}
let variavel = saudacao('Pedro'); // utilizando "return" na função, é possível atribuir valor a uma variável.
console.log(variavel);

/* 
no parenteses "function name(var)" cria-se uma especie de var, é possível atribuir valores para esse (var) dentro da função ou utilizar a mesma para imbutir em outras variáveis dentro da função.

Função simples de adição:           */
function soma(x = 1, y = 1) // foram determinados valores padrões para x e y caso não recebam nem um valor do usuário.
{
  const resultado = x + y; // const criada para receber o resultado da adição.
  return resultado;
}
const resultado = soma(4, 2); // repetição da const informando nos parenteses, os valores de x e y.
console.log(resultado);

// Maneiras de fazer uma function:

const raiz = function (n) {
  return n ** 0.5;
}
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// Mesma função acima, porém em Arrow Function:
const raizQuadrada = n => n ** 0.5;
console.log(raiz(36));
console.log(raiz(49));
console.log(raiz(64));


