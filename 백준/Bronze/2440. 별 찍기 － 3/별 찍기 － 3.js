const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);
let result = '';

for (let i = 0; i < N; i++) {
  for (let j = i; j < N; j++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);
