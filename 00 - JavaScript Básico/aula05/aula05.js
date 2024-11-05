/* Dados Primitivos:
 String, number, undefined, null, boolean

*/
const nome = 'Pedro'; // string  \
const nome1 = "Pedro"; // string  > Tipos de String
const nome2 = `Pedro`; // string /

const num1 = 10; // number    
const num2 = 10.52; // number

let nomeAluno; // undefined ->não aponta pra local nenhuma na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória

const aprovado = false; // Boolean = true, false (lógico)

console.log(typeof nome,typeof num1,typeof nomeAluno,typeof sobrenomeAluno,typeof aprovado); //null não é object, este resultado de tipo é um bug.