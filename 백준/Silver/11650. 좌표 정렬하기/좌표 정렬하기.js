const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = parseInt(input[0]);
let numbers = [];

for (let i = 1; i <= N; i++) {
  let [x, y] = input[i].trim().split(" ").map(Number);
  numbers.push([x, y]);
}

numbers.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});
numbers.forEach(([x, y]) => {
  console.log(x, y);
});
