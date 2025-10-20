const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [L, P] = input[0].split(' ').map(Number);
const str = input[1].split(' ').map(Number);
const x = L * P;

const result = str.map(num => num - x);

console.log(result.join(' '));
