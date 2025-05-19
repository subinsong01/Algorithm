let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let numbers = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let A = numbers[0];
let B = numbers[1];
let C = numbers[2];

let order = input[1].trim().split("");
let result = order.map((char) => {
  if (char === "A") return A;
  if (char === "B") return B;
  if (char === "C") return C;
});

console.log(result.join(" "));
