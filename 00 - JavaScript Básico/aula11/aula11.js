// Objeto Math
let num1 = 1.51

let num2 = Math.floor(num1); // Arredonda para o menor redondo
let num3 = Math.ceil(num1); // Arredonda para o maior redondo
let num4 = Math.round(num1); // Arredonda de forma lógica, dá metade para cima é arredondado para o maior redondo mais próximo, de .49 para baixo é arredondado para o menor num. redondo

// Maior e menor número entre um certo conjunto de valores:
console.log(Math.max(1,2,3,4,5,-13,-5234,523,4,6,7,8,324)) // Maior número
console.log(Math.min(1,2,3,4,5,-13,-5234,523,4,6,7,8,324)) // Menor número

// Aleatorizar valores:
const dado = Math.round(Math.random() * (6 - 1) + 1); // Valor redondo aleatório de 1 a 6
const aleatorio = (Math.random() * (6 - 1) + 1); // Valor aleatório de 1 a 6 incluindo num quebrado. 


// Raiz quadrada de qualquer valor:
let raizNum = 64
console.log(raizNum ** 0.5);


