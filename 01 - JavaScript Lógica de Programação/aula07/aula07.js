/* Switch/case          (funciona como uma espécie de IF ELSE)
estrutura:
let diaSemana;
switch (diaSemana) {
  case 0: diaSemana = 'domingo'
  break; OU -return- caso esteja dentro de uma function
  case 1: diaSemana = 'segunda'
  case .............
}
EXEMPLO com os num do dia da semana e o nome do dia:
*/
const data = new Date("1987-04-21 23:00:00")
const diaSemana = data.getDay();
const diaSemanaTexto = diadaSemana(diaSemana);

function diadaSemana (qualQuerCoisa) {
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
console.log(diaSemana, diaSemanaTexto)
