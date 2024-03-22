// estudo de hash map para montar um conversor ascii:
const ascii = new Map();

ascii.set("Nathan", "555-0182");
ascii.set("Jane", "555-0182");

console.log(ascii.get("Nathan")); // 555-0182
console.log(ascii.size); // 2
// ......