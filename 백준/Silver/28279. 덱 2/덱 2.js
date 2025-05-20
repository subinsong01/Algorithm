const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const deque = new Array(2 * N); 
let head = N;
let tail = N;
const output = [];

for (let i = 1; i <= N; i++) {
  const [cmd, val] = input[i].split(" ").map(Number);

  switch (cmd) {
    case 1:
      deque[--head] = val;
      break;
    case 2:
      deque[tail++] = val;
      break;
    case 3:
      output.push(head < tail ? deque[head++] : -1);
      break;
    case 4:
      output.push(head < tail ? deque[--tail] : -1);
      break;
    case 5:
      output.push(tail - head);
      break;
    case 6:
      output.push(head === tail ? 1 : 0);
      break;
    case 7:
      output.push(head < tail ? deque[head] : -1);
      break;
    case 8:
      output.push(head < tail ? deque[tail - 1] : -1);
      break;
  }
}

console.log(output.join("\n"));
