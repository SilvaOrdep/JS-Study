const form = document.querySelector('.form');
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
  inputStr.preventDefault();
  let asciiBank = convAsciII(inputStr); 
  for (let i = 0; i < asciiBank.length; i++) {
    console.log(`O caractere "${input[i]}" tem o código ASCII decimal ${asciiBank[i]}`);
  } 
} 

form.addEventListener('submit', imprimirValores);

// Exemplo de uso
let input = ("canso"); 
imprimirValores(input); 

// faltando ligar os input de texto do hmtl aqui
// faltando ajustar o preventDefault de submit (n tá funfando)
// faltando fazer o caminho de volta, ascii to string
// ajustes no css e tamanho do input 
// etc...