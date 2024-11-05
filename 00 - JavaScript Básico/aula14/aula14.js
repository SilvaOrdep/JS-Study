/* Objetos:
Esqueleto básico 
var NomeDoObjeto = {
  x1, 
  x2, 
  x3
};
EXEMPLO:
*/
const user = {
  nome: 'Pedro',
  sobrenome: 'Silva',
  idade: 18
};
console.log(user.nome);
console.log(user.sobrenome);

// Função que cria objetos (FACTORY):
function criarUser(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  };
}
const pessoa1 = criarUser("Pedro", "Silva", 18);
console.log(pessoa1.nome);

// Forma contraída da FACTORY:
function criarUser(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}
const pessoa2 = criarUser("Henrique", "Oliveira", 18);
console.log(pessoa2.nome);

// Incrementação de Funções em objetos:
const pessoa3 = {
  nome: "Pedro Silva",
  chavepix: 74988373453,

  fala() { 
    console.log(`A chave pix do ${this.nome} é ${this.chavepix}.`);
  },
}
pessoa3.fala();
