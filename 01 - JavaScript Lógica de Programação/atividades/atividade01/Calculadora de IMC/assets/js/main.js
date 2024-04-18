function escopoPrincipal() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado')

  function receberEvento(evento) {
    evento.preventDefault();
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')
    let imc = peso.value / (altura.value * altura.value)

    if (imc < 18.5) {
      resultado.innerHTML = `<p class="resultadoIMC">Seu IMC é ${imc.toFixed(1)} e você se enquadra como (Abaixo do peso) </p>`;
    } else if (imc >= 18.5 && imc < 25) {
      resultado.innerHTML = `<p class="resultadoIMC">Seu IMC é ${imc.toFixed(1)} e você se enquadra como (Peso normal) </p>`;
    } else if (imc >= 25 && imc < 30) {
      resultado.innerHTML = `<p class="resultadoIMC">Seu IMC é ${imc.toFixed(1)} e você se enquadra como (Sobrepeso) </p>`;
    } else if (imc >= 30 && imc < 35) {
      resultado.innerHTML = `<p class="resultadoIMC">Seu IMC é ${imc.toFixed(1)} e você se enquadra como (Obesidade grau 1) </p>`;
    } else if (imc >= 35 && imc <= 40) {
      resultado.innerHTML = `<p class="resultadoIMC">Seu IMC é ${imc.toFixed(1)} e você se enquadra como (Obesidade grau 2) </p>`;
    } else if (imc > 40 && imc < Infinity) {
      resultado.innerHTML = `<p class="resultadoIMC">Seu IMC é ${imc.toFixed(1)} e você se enquadra como (Obesidade grau 3) </p>`;
    } else if (imc === Infinity) {
      resultado.innerHTML = `<p class="invalido">Altura inválida</p>`;
    } else {
      resultado.innerHTML = `<p class="invalido">Valores inválidos</p>`;
    }
  }

  form.addEventListener('submit', receberEvento)

}
escopoPrincipal();