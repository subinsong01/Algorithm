const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let maxLen = Math.max(...input.map(line => line.length));
let result = "";

for (let i = 0; i < maxLen; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j][i]) {
      result += input[j][i];
    }
  }
}

console.log(result);
