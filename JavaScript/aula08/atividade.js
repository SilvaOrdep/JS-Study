/* Atividade de variáveis
criar 3 variáveis, A B C
e atribuir os valores de uma para outra fazendo 
A = B
B = C
C = A
*/

let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A
let varD;

varD = varA
varA = varB
varB = varC
varC = varD

console.log(varA, varB, varC);

/* correção:
Uma forma fácil de mudar os valores sem carecer de uma nova var, seria utilizando [varA, varB, varC] = [varB, varC, varA]
EX:
*/
