let carro = {
  marca: 'Fiat',
  modelo: 'Uno',
  ano: 2010
};

for (let prop in carro) {
  console.log(`${prop}: ${carro[prop]}`);
}
