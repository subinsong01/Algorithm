const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let n = 1;
let sum = 0;

while (sum + n < input) {
  sum += n;
  n++;
}

const x = input - sum; // n번째 대각선의 몇 번째인지

let u, v;
if (n % 2 === 0) {
  u = x;
  v = n - x + 1;
} else {
  u = n - x + 1;
  v = x;
}

console.log(`${u}/${v}`);
