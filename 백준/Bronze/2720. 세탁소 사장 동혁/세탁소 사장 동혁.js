//쿼터 : 0.25, 다임: 0.1, 니켈: 0.05, 페니: 0.01
//거스름돈은 항상 5.0 이하이고 손님이 받는 동전의 개수를 최소로 
//1.24 손님 = 4쿼터 + 2 *다임+ 페니 *4

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let T = parseInt(input[0])
let coins = [25, 10, 5, 1]

for(let i=1; i<=T; i++){
    let remains = parseInt(input[i])
    let result = []
    
    for(let coin of coins){
        result.push(Math.floor(remains / coin));
        remains %= coin
    }
    
    console.log(result.join(' '));
}