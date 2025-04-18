let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let num = input[0].split(" ").map(Number);
let ascending = [...num].sort((a, b) => a - b);
let descending = [...num].sort((a, b) => b - a);
if (JSON.stringify(num) === JSON.stringify(ascending)) {
  console.log("ascending");
} else if (JSON.stringify(num) === JSON.stringify(descending)) {
  console.log("descending");
} else {
  console.log("mixed");
}
