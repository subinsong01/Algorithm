const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);

const answer = [];
for (let i = 1; i <= T; i++) {
  const price = parseFloat(input[i]);
  const discount = price * 0.8;
  const res = `$${discount.toFixed(2)}`;
  answer.push(res);
}

answer.forEach((line) => console.log(line));
