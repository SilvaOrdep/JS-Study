/* AULA SOBRE STRINGS
Todas as strings são indexadas e tem índicies que são basicamente os valores unidades ou casas de cada caractere da string EX:
             0123456789
let teste = "olá mundo!"
sempre começando pelo índice ZERO 
*/

/* Formas de ver qual é o elemento que está em um determinado índice:
1° usando [x]
2° charAt(x)
SEMPRE buscando dentro do range(alcance ou quantidade de índices presentes na string)
*/
let umaString = "olá mundo";

console.log(umaString[6], "caracter do índice 6"); // no índice 4 se encontra a letra (m)

/* Forma de saber em qual índice começa uma palavra:
console.log(umaString.indexOf('mundo'))
e tem uma forma de falar por onde começar a caçar a palavra:
console.log(umaString.indexOf('mundo', 4)) irá começar do índice 4

OUTRA forma de saber de trás para frente é
console.log(umaString.lastIndexOf())
*/
console.log(umaString.indexOf('mundo'), "índice onde a palavra 'mundo' começa") // em qual índice começa 'mundo'
console.log(umaString.indexOf('mundo', 2), "onde começa 'mundo' ") // ordenar por onde começar a caçar a palavra por índices
console.log(umaString.lastIndexOf('á', 4,), 'a letra á de olá se encontra no índice 2') // saber onde se encontra um caractere de trás para frente na contagem de índices

/* Forma de encontrar letras minúsculas ou unidades de caracteres numa string:
console.log(umaString.match(/[a-z]/g)) para ver todas as letras minúsculas por ex
MAS no caso acima seria necessário um conhecimento mais vasto sobre EXPRESSÕES REGULARES, a flag (g) serve para dizer que é na string inteira e não apenas no primeiro elemento que seja uma letra minuscula por exemplo.
*/
console.log(umaString.match(/[a-z]/g), "comando para identificar todas as letras minúsculas sem acento")
// teste

