// For of

const pessoas = ['Pedro', 'Nathan', 'Dival', 'Noser', 'Pardal']

for (let valor of pessoas) {
  console.log(valor); // nesse caso será impresso os valores do array direto
}

pessoas.forEach(function(valor, indice, array){
 console.log(valor, indice, array);
})

// For Clássico -> Geralmete com interáveis (array ou string)
// For in -> Retorna o índice ou chave (string, array ou objetos)
// For of -> Retorna valor em si (interáveis, arrays ou strings)