const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [a, b] = input;
const sum = BigInt('0b' + a) + BigInt('0b' + b);

console.log(sum.toString(2));
