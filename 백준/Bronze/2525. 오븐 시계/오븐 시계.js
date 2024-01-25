let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let[a,b] = input[0].split(' ').map(Number);
let add_minutes = Number(input[1]);

let totalNumber= a * 60 + b + add_minutes; //분의 형태로 바꿔주기 
totalNumber %= 1440;
let hour = parseInt(totalNumber / 60);
let minutes = totalNumber % 60;

console.log(hour + " " + minutes);