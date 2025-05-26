const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const numbers = input[i]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  console.log(numbers[2]);
}
