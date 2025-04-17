const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let n = Number(input[0]);
let target = input.slice(1).map(Number);

let stack = [];
let result = [];
let current = 1;
let possible = true;

for (let i = 0; i < n; i++) {
  let num = target[i];

  while (current <= num) {
    stack.push(current++);
    result.push("+");
  }

  if (stack[stack.length - 1] === num) {
    stack.pop();
    result.push("-");
  } else {
    possible = false;
    break;
  }
}

if (!possible) {
  console.log("NO");
} else {
  console.log(result.join("\n"));
}
