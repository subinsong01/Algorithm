let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N, K] = input[0].split(' ').map(Number);
function factorial(n){
    let result = 1;
    for(let i = 2; i <=n; i++){
        result *= i;
    }
    return result;
}

let answer = factorial(N) / (factorial(K) * factorial(N - K));
console.log(answer);