const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
const [A, B] = input;

let arr = [];
for (let i = 1; arr.length <= B; i++) {
  for (let j = 0; j < i; j++) {
    arr.push(i);
  }
}

let sum = 0;
for (let i = A - 1; i <= B - 1; i++) {
  sum += arr[i];
}

console.log(sum);
