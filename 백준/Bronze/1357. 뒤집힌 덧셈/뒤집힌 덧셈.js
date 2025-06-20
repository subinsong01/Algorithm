let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

function reversedNumber(n) {
  return Number(String(n).split("").reverse().join(""));
}

let firstNum = reversedNumber(a);
let secondNum = reversedNumber(b);
let firstResult = firstNum + secondNum;

let answer = reversedNumber(firstResult);
console.log(answer);
