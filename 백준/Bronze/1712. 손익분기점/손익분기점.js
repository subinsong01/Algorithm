const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [A, B, C] = input.split(' ').map(Number);

if (C <= B) {
  console.log(-1);
} else {
  const n = Math.floor(A / (C - B)) + 1;
  console.log(n);
}
