const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const x = [];
const y = [];

for (let i = 1; i <= M; i++) {
  const [pack, single] = input[i].split(' ').map(Number);
  x.push(pack);
  y.push(single);
}

const minPack = Math.min(...x);
const minSingle = Math.min(...y);

const case1 = Math.ceil(N / 6) * minPack;
const case2 = N * minSingle;
const case3 = Math.floor(N / 6) * minPack + (N % 6) * minSingle;

console.log(Math.min(case1, case2, case3));
