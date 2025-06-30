const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const b = Array.from({ length: N + 1 }, (_, i) => i);

for (let k = 1; k <= M; k++) {
  const [i, j] = input[k].split(' ').map(Number);
  const temp = b[i];
  b[i] = b[j];
  b[j] = temp;
}

console.log(b.slice(1).join(' '));
