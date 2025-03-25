let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [A, B, V] = input[0].split(" ").map(Number);

let answer = Math.ceil((V - B) / (A - B));
console.log(answer);
