const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const N = Number(input);

if (N === 1) {
  console.log(1);
  process.exit();
}

let a = 1;
let b = 1;

while (b < N) {
  b = 1 + 3 * a * (a + 1);
  a++;
}

console.log(a);
