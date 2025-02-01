let file = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = file[0].split(" ").map(Number);
let num1 = file[1].split(" ").map(Number);
let num2 = file[2].split(" ").map(Number);

let total = [...num1, ...num2]
let answer = total.sort((a,b) => a - b);
console.log(answer.join(" "));