// SetInterval e SetTimeout

function mostrarHora() {
  let data = new Date();
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
  })
}

const timer = setInterval(function() {
  console.log(mostrarHora())
}, 1000) // em milésimos, ou seja 1000 = 1 seg

setTimeout(() => {
  clearInterval(timer)
}, 5000);
