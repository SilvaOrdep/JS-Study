/* Algoritmo :
imprimir na tela "DiaDaSemana, numDoDia de mês de ano hora"
*/
const data = new Date()
const diaSemana = data.getDay();
const diaSemanaTexto = diadaSemana(diaSemana);
const mesName = data.getMonth();
const mesDate = mes(mesName);
const divDate = document.querySelector('.divDate');

function diadaSemana(qualQuerCoisa) {
  let diaSemanaTexto;
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo"
      return diaSemanaTexto
    case 1:
      diaSemanaTexto = "Segunda"
      return diaSemanaTexto
    case 2:
      diaSemanaTexto = "Terça"
      return diaSemanaTexto
    case 3:
      diaSemanaTexto = "Quarta"
      return diaSemanaTexto
    case 4:
      diaSemanaTexto = "Quinta"
      return diaSemanaTexto
    case 5:
      diaSemanaTexto = "Sexta"
      return diaSemanaTexto
    case 6:
      diaSemanaTexto = "Sábado"
      return diaSemanaTexto
  }
}
function mes(nomedoMes) {
  let mes;
  switch (mesName) {
    case 0:
      mes = "Janeiro"
      return mes
    case 1:
      mes = "Fevereiro"
      return mes
    case 2:
      mes = "Março"
      return mes
    case 3:
      mes = "Abril"
      return mes
    case 4:
      mes = "Maio"
      return mes
    case 5:
      mes = "Junho"
      return mes
    case 6:
      mes = "Julho"
      return mes
    case 7:
      mes = "Agosto"
      return mes
    case 8:
      mes = "Setembro"
      return mes
    case 9:
      mes = "Outubro"
      return mes
    case 10:
      mes = "Novembro"
      return mes
    case 11:
      mes = "Dezembro"
      return mes
  }
}
function leftzero(num) {
  return num >= 10 ? num : `0${num}`;
}

divDate.innerHTML = `<h1>${diaSemanaTexto}, ${data.getDate()} de ${mesDate} de ${data.getFullYear()} ${leftzero(data.getHours())}:${leftzero(data.getMinutes())}</h1>`

