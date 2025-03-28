let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let N = parseInt(input[0]);
let stack = [];
let answer = [];
for (let i = 1; i <= N; i++) {
  let words = input[i].trim().split(" ");

  if (words[0] === "push") {
    stack.push(parseInt(words[1]));
  } else if (words[0] === "top") {
    answer.push(stack.length > 0 ? stack[stack.length - 1] : "-1");
  } else if (words[0] === "size") {
    answer.push(stack.length);
  } else if (words[0] === "empty") {
    answer.push(stack.length === 0 ? "1" : "0");
  } else if (words[0] === "pop") {
    answer.push(stack.length > 0 ? stack.pop() : "-1");
  }
}
console.log(answer.join("\n"));