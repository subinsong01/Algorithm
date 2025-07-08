const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const [C, D] = input[1].split(' ').map(Number);

const n = A * D + C * B;
const d = B * D;

function gcd(a, b) {
  while (b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

const divisor = gcd(n, d);
const a = n / divisor;
const b = d / divisor;

console.log(`${a} ${b}`);
