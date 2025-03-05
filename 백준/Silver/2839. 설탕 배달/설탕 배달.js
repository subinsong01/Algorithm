//N = 배달해야하는 사탕 킬로그램
//봉지는 3킬로그램이랑 5킬로그램이 있다

let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let N = parseInt(input);
let count = 0;

while(N >=0){
    if(N % 5 === 0){
        count += N / 5;
        console.log(count);
        break;
    }
    N -= 3;
    count ++;
    
    if(N < 0){
        console.log(-1);
        break;
    }
}