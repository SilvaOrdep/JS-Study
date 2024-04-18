// Maneiras de declarar funções:

// hoisting - ocorre com função padrão, onde a função pode ser declarada e chamada acima da declaração
// Function anonima é quando a própria não carrega nome, que vemos no exemplo abaixo no valor da const "falaOi" linha - 13.

// Exemplo de Função padrão:
// bomDia(); é possível chamar a mesma acima da sua declaração, aplicação do hoisting.
function bomDia() {
  console.log("Bom dia!");
}
bomDia();

// function é um objeto de primeira classe - ou seja, é possível tratar função como dado, ex uma const receber uma function no valor, e o nome da const torna-se uma function e pode ser chamada normalmente. EXEMPLO PRÁTICO:
const falaOi = function() { // <- function anonima
console.log("oi")
}
falaOi(); // Nome da const acompanhado de "()".

// Arrow Function:
const arrowCh = () => {
  console.log("Exemplo de Arrow function com chaves");
} // quando for pouca informação dentro da ação da função é possivel remover as chaves e deixar em uma só linha, veja no exemplo abaixo:
arrowCh();

const arrow = () => console.log("Exemplo de Arrow function"); // sem chaves.
arrow();

// function dentro de objetos:

const objeto = {
  saudacao() {
    console.log("Olá seres humanos, aqui quem fala é o Edukof")
  }
}
objeto.saudacao();

