const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, L] = input[0].split(' ').map(Number);
const positions = input[1].split(' ').map(Number).sort((a, b) => a - b);

let count = 0;
let t = 0;

for (let i = 0; i < N; i++) {
  const l = positions[i];

  if (l > t) {
    count++;
    t = l + L - 1;
  }
}

console.log(count);
