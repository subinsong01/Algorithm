let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let T = parseInt(input[0]); //테케
let index = 1;
let answer = [];

for(let t = 0; t < T; t++){
    let [N, M] = input[index].split(' ').map(Number);//N=국가, M=비행기 종류
    index += M + 1;
    answer.push(N - 1);
}
console.log(answer.join('\n'));
