let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [A, B] = input[0].split(" ").map(Number);

let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(arr[B - 1]);
