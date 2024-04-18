// Objeto date: 
const data = new Date();
const dataBr = dataGeral(data);

function leftzero(num) {
  return num >= 10 ? num : `0${num}`;
}

function dataGeral(data) {
  const dia = leftzero(data.getDate());
  const mes = leftzero(data.getMonth() + 1);
  const ano = (data.getFullYear());

  return `Brazil date - ${dia}/${mes}/${ano}`
}

console.log(dataBr)
