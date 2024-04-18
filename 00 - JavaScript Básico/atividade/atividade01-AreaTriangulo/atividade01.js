// Escreva  um  algoritmo que  ousuário  digite o  valor  da  base  e  da  altura  de  um triângulo para calcular a sua área.

let base = prompt('Digite o tamanho da base do triangulo?');
let altura = prompt('Digite o tamanho da altura do triangulo?');

base = parseFloat(base);
altura = parseFloat(altura);

let area = base*altura/2;

alert(`A área do triangulo informado é: ${area}`);