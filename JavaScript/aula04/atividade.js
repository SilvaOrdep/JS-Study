/* Atividade de constante e variável:

Pedro Oliveira Silva tem 18 anos, pesa 68kg
tem 1.74 de altura e seu IMC é de xxxxxx
Pedro Oliveira Silva nasceu em xxxx
 */

const nome = "Pedro Oliveira";
const sobrenome = "Silva";
const idade = 18;
const peso = 68;
const alturaEmM = 1.74;
let IMC = peso / (alturaEmM*alturaEmM);
const anoAtual = 2024;
const anoDeNascimento = (anoAtual-1)-idade; // Eu nasci em Abril(ainda não era abril quando fiz esse código), para não fazer um algoritmo com sistema de meses, eu subtraí 1 do ano atual para poder dar o resultado corredo do ano de nascimento.
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso+'kg, tem', alturaEmM, 'de altura e seu IMC é de', IMC);
console.log(nome, sobrenome, 'nasceu em', anoDeNascimento); 

// Uma forma de evitar usar vírgula para separar ou espaçar variáveis ou constantes é utilizando a crase para toda a string do console e para sinlaizar o que é uma letORconst usa-se ${letORconst} EX: 
console.log(`Olá meu nome é ${nome} e eu tenho ${idade} anos`) 
