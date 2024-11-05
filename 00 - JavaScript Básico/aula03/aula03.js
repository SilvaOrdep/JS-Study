// Aprendendo sobre VARIÁVEL:

let nome = "Nathan" 
/* utiliza-se 'let (nomeie a variável) = "valor a ser colocado no local" OBS: sempre nameofV significativos.
   não pode iniciar namesOfV com números e não pode ter espaços ou traços. 
   case-sensetive = letras minúsculas e maiúsculas fazem diferença ex: nomeCliente diferente de nomecliente
   não utilizar VAR.
*/

console.log(nome, 'tem 20 anos');
console.log('esse ano', nome, 'faz 21 anos');
console.log(nome, 'gosta do noser');
console.log('o filho de', nome, 'se chama dival');

// Hierarquia de variáveis:

let cor;

cor = "azul";
console.log('meu cabelo é', cor+'.');
// mesmo name mas valor diferente:
cor = "amarelo";
console.log('meu camaro é', cor+'.');

/* Hierarquia de variáveis:
1° determine uma let sem valor, somente com o name da variável ex: let cor;
2° coloque o name da variável e o valor dela ex: cor = "azul";
3° crie um consolelog e ponha o nameofV/namedavariável
4° caso deseje colocar mais um console com o mesmo nome de variável, MAS com valor diferente, coloque nameofV = "novo valor" e logo em seguida adicione o valor em um novo consolelog, a hierarquia funciona com o que vem por último.
*/



