const userNumber = Number(prompt("Digite um número:"));
const titleNumber = document.getElementById('usernumero');
const textNumber = document.getElementById('texto');

titleNumber.innerHTML = userNumber;

textNumber.innerHTML = "";
textNumber.innerHTML += `<p>Raiz quadrada: ${userNumber**0.5} <p/>`;
textNumber.innerHTML += `<p>${userNumber} É inteiro: ${Number.isInteger(userNumber)} <p/>`;
textNumber.innerHTML += `<p>É NaN: ${Number.isNaN(userNumber)} <p/>`;
textNumber.innerHTML += `<p>Arredondando para baixo: ${Math.floor(userNumber)} <p/>`;
textNumber.innerHTML += `<p>Arredondando para cima: ${Math.ceil(userNumber)} <p/>`;
textNumber.innerHTML += `<p>Com duas casas decimais: ${userNumber.toFixed(2)} <p/>`;





