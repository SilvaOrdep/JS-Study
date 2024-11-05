// Aula de While:

// function para gerar número aleatório:
function random (max,min) {
  const r = Math.random() * (max-min) + (min);
  return Math.floor(r); 
}

const min = 0;
const max = 30;
let rand = random(min, max); // as const serão os valores dos parametros

while (rand !== 10) {  // Lê a condição primeiro, se for falso, break.
  rand = random(min, max);
  console.log(rand);
}

console.log('-------------------')

do { // executa primeiro e depois lê a condição para poder parar
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10)
