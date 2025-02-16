let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let [R1, S] = input.map(Number);
let R2 = (2*S) - R1;
console.log(R2)