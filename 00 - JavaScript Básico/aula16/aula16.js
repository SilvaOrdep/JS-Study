// Sobre funções e HTML - tomar como base o local /atividade/atividade02 com o index.html linkado com o js abaixo:

function escopoPrincipal() {
  const form = document.querySelector('.form');

  /* forma de evitar que a página seja atualizada e apague os dados recebidos: 
  (METODO 1)
  form.onsubmit = function (evento) {
    evento.preventDefault();
  }
  (METODO 2):
  */
  function receberEvento(evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')
  }

  form.addEventListener('submit', receberEvento)
}
escopoPrincipal();