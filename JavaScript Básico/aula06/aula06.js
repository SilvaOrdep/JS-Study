/* Operadores Aritméticos:

+ Adição ou Concatenação(dependendo do tipo de dado, ex se for uma string); 
** Potenciação;
% Resto da divisão;
/ Divisão
*/
const num1 = 5;
const num2 = 2;
const num3 = 10; 

console.log(num1+num3*num2); // num3 será multiplicado primeiro pelo num2 e o resultado será somado com num1.

/* Como na matemática existe as prioridades de solução, por exemplo **(potência) vem antes de +(adição) seguindo a lógica matemática.
Para tornar uma adição prioridade em uma expressão onde há ** é necessário os colchetes-->() EX:
*/
console.log((num1+num3)*num2); 

// NO CASO de haver operadores aritméticos de MESMA prioridade, a ordem de resolução será da esquerda para direita EX:
console.log(num2*num1/num2);

// Incremento = ++
let PA = 2;
++PA // 2 + 1       
++PA // 3 + 1          
console.log(PA); // Especie de progressão aritmética

// Decremento = --
let decremento = 10;
--decremento; // 9
--decremento; // 8 
console.log(decremento); 

/* NaN = Not a number
parseInt (num inteiro)    \   
Number                    -> Para transformar String em Number
parseFloat (num decimais) /
*/
const nume1 = 10;
const nume2 = Number('5'); // Mesmo se fosse letras ex: 'Pedro', ainda seria number no typeof
console.log (nume1 + nume2); 
console.log(typeof nume2);