const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const ingre = input.slice(1).map((line) => line.split(" ").map(Number));

let minDiff = Infinity;

const dfs = (depth, sour, bitter, used) => {
  if (used) {
    minDiff = Math.min(minDiff, Math.abs(sour - bitter));
  }

  if (depth === N) return;

  for (let i = depth; i < N; i++) {
    const [s, b] = ingre[i];
    dfs(i + 1, sour * s, bitter + b, true);
  }
};


dfs(0, 1, 0, false);

console.log(minDiff);
