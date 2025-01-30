let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = input[1].split(' ').map(x=>Number(x));


let minValue = numbers.length > 0 ? numbers.reduce((a, b) => Math.min(a, b)) : undefined; 
let maxValue = numbers.length > 0 ? numbers.reduce((a, b) => Math.max(a, b)) : undefined;

console.log(minValue + " " + maxValue);