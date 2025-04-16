let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let cards = input[1].split(" ").map(Number);
let maxSum = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (sum <= M) {
        maxSum = Math.max(maxSum, sum);
      }
    }
  }
}

console.log(maxSum);
