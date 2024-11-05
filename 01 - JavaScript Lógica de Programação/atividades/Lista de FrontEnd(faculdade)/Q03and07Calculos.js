function calculadoraSimples(operacao, num1, num2) {
  switch (operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Operação inválida";
  }
}

console.log("Soma: ",calculadoraSimples("+", 2, 3),"Subtração: ", calculadoraSimples("-", 3, 2),"Multiplicação: ",  calculadoraSimples("*", 2, 3),"Divisão: ",  calculadoraSimples("/", 2, 2) ); 