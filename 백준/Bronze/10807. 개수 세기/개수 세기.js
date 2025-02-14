let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = parseInt(input[0]);
let arr = input[1].split(' ').map(Number);
let v = parseInt(input[2]);

let count = 0;

for(let i = 0; i < N; i++){
    if(arr[i] === v){
        count ++;
    }
}

console.log(count);