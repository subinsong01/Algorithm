let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let [A, B, C] = input.split(" ").map(Number).sort((a, b) => b - a);
console.log(B);