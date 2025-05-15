let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let answer = input[0];
for (let i = 0; i <= input.length; i++) {
  if (input[i] === "-") {
    answer += input[i + 1];
  }
}
console.log(answer);
