//For para saber se um num é primo
function primo(num) {
  let resto;
  let qtd = 0;
  for (let cont = 2; cont < num; cont++) {
    resto = num % cont;
    if (resto === 0) {
      qtd++;
      break;
    }
  }

  if (qtd === 0 && num > 1) {
    console.log(`${num} é Primo`);
  } else {
    console.log(`${num} não é Primo`);
  }
}
primo(2);