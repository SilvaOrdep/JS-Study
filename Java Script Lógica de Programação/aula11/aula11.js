// Aula de For In
// com arrays:
const cor = ['azul', 'verde', 'branco'];

for (let i in cor) {
  console.log(i);
}

// com objetos:

const user = {
  name: "Pedro",
  senha: 123
}

for (let i in user) {
  console.log(i, user[i])
}