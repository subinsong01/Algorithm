const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const M = Number(input[0]);
const N = Number(input[1]);

let sum = 0;
let min = -1;

for (let i = M; i <= N; i++) {
  const sqrt = Math.sqrt(i);
  if (Number.isInteger(sqrt)) {
    sum += i;
    if (min === -1) min = i;
  }
}

if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(min);
}
