const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = parseInt(input[0]);
let numbers = input[1].split(" ").map(Number);

let uniqueNumber = [...new Set(numbers)].sort((a, b) => a - b);
let giveIndexNumber = new Map();

uniqueNumber.forEach((num, idx) => {
  giveIndexNumber.set(num, idx);
});

let result = numbers.map((num) => giveIndexNumber.get(num));
console.log(result.join(" "));
