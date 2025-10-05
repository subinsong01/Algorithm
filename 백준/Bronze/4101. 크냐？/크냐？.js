const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  if (x === 0 && y === 0) break;

  if (x > y) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
