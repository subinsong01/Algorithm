let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let queue = [];
let answer = [];

for (let i = 1; i <= N; i++) {
  let words = input[i].trim().split(" ");

  if (words[0] === "push") {
    queue.push(words[1]);
  } else if (words[0] === "front") {
    answer.push(queue.length > 0 ? queue[0] : -1);
  } else if (words[0] === "size") {
    answer.push(queue.length);
  } else if (words[0] === "empty") {
    answer.push(queue.length === 0 ? "1" : "0");
  } else if (words[0] === "pop") {
    answer.push(queue.length > 0 ? queue.shift() : "-1");
  } else if (words[0] === "back") {
    answer.push(queue.length > 0 ? queue[queue.length - 1] : -1);
  }
}
console.log(answer.join("\n"));
