const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [B, C, D] = input[0].split(" ").map(Number);
const burgers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const sides = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const drinks = input[3]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

const totalOriginal = [...burgers, ...sides, ...drinks].reduce(
  (sum, price) => sum + price,
  0
);

const setMenu = Math.min(B, C, D);

let discountedTotal = 0;
for (let i = 0; i < setMenu; i++) {
  const setSum = burgers[i] + sides[i] + drinks[i];
  discountedTotal += Math.floor(setSum * 0.9);
}

for (let i = setMenu; i < burgers.length; i++) discountedTotal += burgers[i];
for (let i = setMenu; i < sides.length; i++) discountedTotal += sides[i];
for (let i = setMenu; i < drinks.length; i++) discountedTotal += drinks[i];

console.log(totalOriginal);
console.log(discountedTotal);
