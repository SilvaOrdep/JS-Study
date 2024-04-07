function escopoPrincipal() {

  const form = document.querySelector('.form');
  const strInput = document.querySelector('.txt');
  const asciiHtmlInput = document.querySelector('.asciiInput');
  const resultado = document.querySelector('.resultado')

  function receberEvento(evento) {
    evento.preventDefault();
    // Função para converter uma string em ASCII decimal
    function convAsciII(inputStr) {
      let asciiBank = [];
      for (let i = 0; i < inputStr.length; i++) {
        // Obtém o valor ASCII decimal de cada caractere 
        let valorEmAscii = inputStr.charCodeAt(i);
        asciiBank.push(valorEmAscii); // Armazena o valor ASCII na lista
      }
      return asciiBank; // Retorna a lista com os valores ASCII
    }

    function imprimirValores(inputStr) {
      let asciiBank = convAsciII(inputStr);
      let result = '';
      for (let i = 0; i < asciiBank.length; i++) {
        result += `${asciiBank[i]}`
      }
      resultado.innerHTML = `String para ASCII: ${result}`

    }
    imprimirValores(strInput.value);
  }

  form.addEventListener('submit', receberEvento);
}
escopoPrincipal();

// Missão principal = fazer o caminho de volta, minha ideia é fazer uma condição onde se o usurario digiar o result de imprimirValores() no input de ASCII ele vai retornar o valor string do input de string, não vai fazer necessáriamente uma conversão e sim uam gambiarra, MAS é o caminho de volta 
