/* Um sistema básico de perguntas de valores utilizando algumas funções de objetos do navegador, tais como:

prompt - Utilizado na atividade para fazer perguntas, e números são viram strings, é necessário mudar para Number caso seja preciso fazer contas e etc.
alert - serve basicamente para avisar, mostrar o resultado no caso da atividade realizada abaixo.
confirm - retornar boelans, true ou false.

Atividade de adição matemática envolvendo perguntas de números no navegador(algoritmo extremamente primitivo):
*/ 

let num1 = prompt("Digite um número");
let num2 = prompt("Digite outro número");

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1+num2;

alert(`O resultado da soma entre os números selecionados é ${resultado}`);
/* 
OBSERVAÇÃO:
Não é necessário a criação de uma const-resultado nesse tipo de circunstância, as expressões matemáticas podem ser colocadas direto no ${x1+x2} dentro das crases. 
*/ 


