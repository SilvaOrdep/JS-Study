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
Uma forma fácil de mudar os valores sem carecer de uma nova var, seria utilizando [var1, var2, var3] = [var2, var3, var1]
EX:
*/
let var1 = "1";
let var2 = "2";
let var3 = "3";

[var1, var2, var3] = [var2, var3, var1]

console.log(var1, var2, var3);