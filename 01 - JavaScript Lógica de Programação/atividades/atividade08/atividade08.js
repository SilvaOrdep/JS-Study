/* Escreva uma função que recebe um número e
retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número
Use a função com números de 0 a 100 */

function divisivel(n) {

  const num = (n >= 0 && n <= 100) ? n : "Digite um número de 0 a 100";

  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz"
  } else if (num % 5 == 0) {
    return "Buzz"
  } else if (num % 3 == 0) {
    return "Fizz"
  } else {
    return num
  }
}
console.log(divisivel(15));

// Outra versão :
function fizzBuzz(num) {
  if (typeof num !== "number") return num;
  if (num % 3 === 0 && num % 5 == 0) return "FizzBuzz";
  if (num % 5 === 0) return "Buzz";
  if (num % 3 === 0) return "Fizz";
  return num;
}

console.log(fizzBuzz("a"))
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}