const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);
let result = '';

for (let i = 1; i <= N; i++) {
  const x = ' '.repeat(i - 1);
  const y = '*'.repeat(2 * (N - i) + 1);
  result += x + y + '\n';
}

for (let i = N - 1; i >= 1; i--) {
  const x = ' '.repeat(i - 1);
  const y = '*'.repeat(2 * (N - i) + 1);
  result += x + y + '\n';
}

console.log(result.trimEnd());
