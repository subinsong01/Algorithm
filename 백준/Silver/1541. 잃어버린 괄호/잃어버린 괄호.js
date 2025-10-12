const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const a = input.split('-');

const x = a[0]
  .split('+')
  .map(Number)
  .reduce((a, b) => a + b, 0);

let y  = 0;
for (let i = 1; i < a.length; i++) {
  const sum = a[i]
    .split('+')
    .map(Number)
    .reduce((a, b) => a + b, 0);
  y += sum;
}

console.log(x - y);
