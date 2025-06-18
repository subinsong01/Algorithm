let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let F = Number(input[1]);

let makeZero = Math.floor(N / 100) * 100;

for (let i = 0; i < 100; i++) {
  const nums = makeZero + i;

  if (nums % F === 0) {
    const result = i.toString().padStart(2, "0");
    console.log(result);
    break;
  }
}
