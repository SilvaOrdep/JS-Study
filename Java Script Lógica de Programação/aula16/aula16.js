// Aula de continue e break em estruturas de repetição
const funcionarios = [1, 2, 3, 4, 5, 6, 7, 8]

// situação hipotética de distribuição de salário bônus para funcionários:
for (let num of funcionarios) {
  if (num === 2) {
    console.log('Funcionário 2 de férias, pulado com o "continue"')
    continue; // pula o valor indicado mas continua a iteração
  }

  if (num === 8) {
    console.log('Funcionário 8 demitido por exemplo, e fica fora da lista de bônus, utilizando-se "break"')
    break; // para antes do valor indicano e para a iteração.
  }
  console.log(num)
}