let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); //숫자의 갯수
let string = input[1]; //전체 데이터들이 하나의 문자로 담김 

let answer = 0;
for(let x of string){
    answer += Number(x);
}
console.log(answer);