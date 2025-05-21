const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let burger1 = input[0];
let burger2 = input[1];
let burger3 = input[2];
let coke = input[3];
let cidar = input[4];
let cheapestBurger = Math.min(burger1, burger2, burger3);
let cheapestDrink = Math.min(coke, cidar);

console.log(cheapestBurger + cheapestDrink - 50);
