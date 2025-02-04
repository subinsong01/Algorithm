let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let money = parseInt(input[0])
let change = 1000 - money 
let count = 0
let coins = [500, 100, 50, 10, 5, 1]

for(let coin of coins){
    count += Math.floor(change/coin);
    change %= coin
}
console.log(count)