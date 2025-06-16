let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let numbers = input
  .split("")
  .map(Number)
  .sort((a, b) => b - a)
  .join("");

console.log(numbers);
