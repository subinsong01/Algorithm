let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let firstNum = input[0];
let secondNum = input[1];
let thirdNum = input[2];

let answer = Number(firstNum) + Number(secondNum) - Number(thirdNum);
console.log(answer);

let secondAnswer = firstNum + secondNum;  
secondAnswer = Number(secondAnswer) - Number(thirdNum);  
console.log(secondAnswer);
