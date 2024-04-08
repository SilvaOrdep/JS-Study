// Receber 2 números e retornar o maior 
// Varios modos de ser feito:

// function maior (n1,n2) {
//   if (n1 > n2) {
//     return n1;
//   } else {
//     return n2;
//   }
// }
// let numbers = maior(34,253)
// console.log(numbers)

// function maior(n1, n2) {
//   if (n1 > n2) {
//     return n1;
//   }
//   return n2;
// }
// console.log(maior(133123, 4))

// ArrowFunction (quando a condição for algo simples como o exemplo abaixo, é ideal usar ArrowFunction para otimização da leitura):
const maior = (n1,n2) => n1 > n2 ? n1 : n2
console.log(maior(23,54))