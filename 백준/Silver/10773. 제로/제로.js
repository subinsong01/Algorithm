let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let stack = [];
let K = parseInt(input[0]);

for (let i = 1; i <= K; i++) {
  let num = parseInt(input[i]);

  if (num === 0) {
    stack.pop();  
  } else {
    stack.push(num);  
  }
}

let answer = stack.reduce((acc, cur) => acc + cur, 0);

console.log(answer);
