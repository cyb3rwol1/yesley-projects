/*
OBJECT REST/SPREAD PROPERTIES
rest e spread também entraram no ES2015.
A sintaxe chamada de “destructuring assignment” é uma expressão JavaScript que torna possível descompactar valores de arrays ou propriedades de objetos e atribuir a variáveis novas.
*/

var a, b, rest;
[a, b] = [10, 40];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]