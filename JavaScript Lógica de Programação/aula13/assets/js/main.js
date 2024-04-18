const frases = document.querySelectorAll('p');
const bodystyle = getComputedStyle(document.body);
const bodyColor = bodystyle.backgroundColor

// Seletores CSS em camelCase
for (let ps of frases) {
  ps.style.backgroundColor = bodyColor
  ps.style.color = '#FFF';
  ps.style.fontFamily = 'sans-Serif'
  ps.style.fontWeight = 'bold';
}
// obs: qualquer seletor do css entra em camelCase no js, ou seja background-Color se torna backgroundColor e assim para todos.