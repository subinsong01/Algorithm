let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = parseInt(input[0]);
let A = new Set(input[1].split(" ").map(Number)); 
let M = parseInt(input[2]);
let B = input[3].split(" ").map(Number);

let result = [];
for (let i = 0; i < M; i++) {
  if (A.has(B[i])) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join("\n"));
