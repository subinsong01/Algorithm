const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = parseInt(input[0]);
const divisors = input[1].split(' ').map(Number);

const min = Math.min(...divisors);
const max = Math.max(...divisors);

console.log(min * max);
