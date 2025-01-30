let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = input[1].split(' ').map(Number);

let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

console.log(minValue, maxValue);
