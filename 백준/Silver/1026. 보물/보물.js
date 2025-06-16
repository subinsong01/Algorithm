//0 1 1 1 6
//8 7 3 2 1
//0 + 7+3+2+6=18
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("")
  .split("\n");

let N = parseInt(input[0]);
let a = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let b = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let result = 0;
for (let i = 0; i < N; i++) {
  result += a[i] * b[i];
}
console.log(result);
