/* Avaliação de curto-circuito:
|| OR
&& AND

Falsy - expressões que retornarão um valor falso não literal
Falsy's:
'', "", ``, null, undefined, NaN e 0.
*/
// Exemplo de função de curto, onde o log faz a avaliação de um valor, seja falso ou verdadeiro:
function falarOi() {
  return 'Oi';
}

let vaiExecutar = false;
console.log(vaiExecutar && falarOi());// Nesse caso se a condição 'vaiExecutar' fosse true por conta de alguma ocasião, a função iria imprimir 'Oi' no log.
// Veja no exemplo abaixo: 
function falarHello() {
  return 'Hello World!';
}

let executar = true;
console.log(executar && falarHello());
// com o || funciona quase que da mesma forma.