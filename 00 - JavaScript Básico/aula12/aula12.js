// Aula sobre ARRAYS:

// Índices =      0        1        2      
const alunos = ['Andreson', 'Pedro', 'Dival'] 
/* Diferente das strings onde cada letra representa um índice, nos Arrays cada string separada por vírgula possui apenas um índice, ou seja é um índice por valor. */

// Como adicionar mais valores no final do Array:
alunos.push('Nathan'); // Índice 3
alunos.push('Ryan'); // Índice 4
alunos.push('Renan'); // Índice 5
alunos [6] = 'Lucas'; // Adicionando em um índice específico 
console.log(alunos);

/* Adiciona no fim. parte 2:
alunos [alunos.length] = 'Nathan'; 
alunos [alunos.length] = 'Ryan';
alunos [alunos.length] = 'Luan';
*/

/* Como modificar o valor de um índice:
alunos[0] = 'Luan'; Altera
*/

/* Adicionar no começo:
alunos.unshift('Fábio'); 
alunos.unshift('Luiza');
*/

// const removido = alunos.shift(); // remove um índice do começo 

// delete alunos [1]; deleta a informação presente em um índice do Array, mas o mantém a quantidade de índices do Array

// console.log(alunos.slice()); Dá para utilizar o slice para fatiar os índices