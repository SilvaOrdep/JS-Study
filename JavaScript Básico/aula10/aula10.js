// AULA SOBRE NUMBER:

let numUm = 1;
let numDo = 1.5;
// Transformar temporariamente a var numUm em uma string por meio de:
console.log(numUm.toString()+numDo, "- utilização da propriedade 'toString()' na var1 no cálculo de 1+1.5"); 

// Versão binária de um number:
let binaTest = 120
console.log(binaTest.toString(2), "- toString(2) normal number to binary number");

// Arredondar um number:
let numQuebrado = 1.4394325;
console.log(numQuebrado.toFixed(2), "- toFixed(2) para arredondar números com casas decimais e toFixed() para arredondar para ficar sem casas decimais");


// Idendificar se um número é inteiro ou não:
console.log(Number.isInteger(numQuebrado), "- Number.isInteger(var) para verificar se um número é inteiro")

// Ajuste nas contas:
let num1 = 0.7
let num2 = 0.1

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

num1 = parseFloat(num1.toFixed(2));

console.log(num1, "- Utilização de parseFloat e toFixed(2) para deixar os calculos com números quebrados 'calibrados'");