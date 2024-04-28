const form = document.querySelector(".form");
const strInput = document.querySelector(".txt");
const asciiHtmlInput = document.querySelector(".asciiInput");

function receberEvento(evento) {
  evento.preventDefault();
  function convAsciII(inputStr) {
    let asciiBank = [];
    for (let i = 0; i < inputStr.length; i++) {
      let valorEmAscii = inputStr.charCodeAt(i);
      asciiBank.push(valorEmAscii);
    }
    return asciiBank;
  }

  function imprimirValores(inputStr) {
    let asciiBank = convAsciII(inputStr);
    let result = "";
    for (let i = 0; i < asciiBank.length; i++) {
      result += `${asciiBank[i]} `;
    }
    asciiHtmlInput.innerHTML = `${result}`;
  }
  imprimirValores(strInput.value);

  function convStr(inputAscii) {
    let asciiArray = inputAscii
      .split(" ")
      .map((num) => parseInt(num.trim()));
    let result = "";
    for (let i = 0; i < asciiArray.length; i++) {
      let valorEmStr = String.fromCharCode(asciiArray[i]);
      result += valorEmStr;
    }
    strInput.innerHTML = result;
  }
  convStr(asciiHtmlInput.value);
}

form.addEventListener("submit", receberEvento);