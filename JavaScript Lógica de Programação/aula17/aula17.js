// Aula sobre erro:
function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números')
  }
  return x + y
}

try {
  console.log(soma(1,3)) // executa.
  console.log(soma(1,"3")) // para no throw new Error e vai pro catch, no catch pode ser utilizado o parametro "error" e dentro das chaves utilizar console.log(error) para retornar uma mensagem de erro para o backend.
} catch(error) {
  console.log("Mensagem amigável para user");
  console.log(error); // mensagem detalhada do erro for backend.
}