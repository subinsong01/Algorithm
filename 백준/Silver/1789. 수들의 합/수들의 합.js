let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let S = Number(input);
let n = 1;
let sum = 0;

while (true) {
  sum += n;
  if (sum > S) {
    console.log(n - 1);
    break;
  }
  n++;
}
