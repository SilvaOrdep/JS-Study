// ... rest, ...spread
// aula sobre reatribuição por meio da desestruturação (arrays):
const pessoas = ['nathan', 'pedro', 'dival']
pessoas.push('washigton');
[p1, p2, p3, p4] = pessoas



const numero = [ [1, 2, 3], [4, 5, 6], ['jeferson', 8, 9]]
const [lista1,lista2, lista3] = numero
lista3[0] = 7
console.log(numero[2]);


// aula sobre reatribuição por meio da desestruturação (objetos):
const pessoa = {
  nome: 'pedro', 
  sobrenome: 'dival', 
  idade: 'jeferson',
  endereco: {
      rua: 'existente III',
      bairro: 'jacobina 4'
  }
}

pessoa.idade = 18
const {nome,sobrenome, ...resto} = pessoa

console.log(nome,sobrenome, resto);