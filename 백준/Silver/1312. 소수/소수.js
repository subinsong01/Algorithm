let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [A, B, N] = input[0].split(" ").map(Number);

let remainder = A % B;

for (let i = 0; i < N - 1; i++) {
  remainder = (remainder * 10) % B;
}
let result = Math.floor((remainder * 10) / B);

console.log(result);
