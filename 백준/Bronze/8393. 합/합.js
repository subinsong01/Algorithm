let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let sumNumber = 0; // 더한 값

for(let i = 1 ; i <= n; i++){
    sumNumber += i;
}
console.log(sumNumber);