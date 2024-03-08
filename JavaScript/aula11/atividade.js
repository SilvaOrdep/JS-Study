const userNumber = Number(prompt("Digite um número:"));
const titleNumber = document.getElementById('usernumero');
const textNumber = document.getElementById('texto');

titleNumber.innerHTML = userNumber;

textNumber.innerHTML = `
<p>Raiz quadrada: ${userNumber**0.5}<p/>
<p>${userNumber} É inteiro: ${Number.isInteger(userNumber)} <p/>
<p>É NaN: ${Number.isNaN(userNumber)} <p/>
<p>Arredondando para baixo: ${Math.floor(userNumber)} <p/>
<p>Arredondando para cima: ${Math.ceil(userNumber)}<p/>
<p>Com duas casas decimais: ${userNumber.toFixed(2)} <p/>
`




