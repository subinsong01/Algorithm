let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);
let answer = "";
for (let i = 0; i < N / 4; i++) {
  answer += "long ";
}

console.log(answer + "" + "int");
