let file = require('fs').readFileSync('/dev/stdin').toString().split('\n');

//N:센서, 최대 K개의 집중국을 세울 수 있다고 한다.
//수신 가능 영역의 길이의 합을 최소화 
//고속도로 = 평면상의 직선 
let N = parseInt(file[0]);
let K = parseInt(file[1]);
let arr = file[2].split(' ').map(Number).sort((a,b) => a - b);
let sortDistance = [];

if (K >= N){
    console.log(0);
    return;
}

for(let i = 0; i < N-1; i++){
    let distance = arr[i+1] - arr[i];
    sortDistance.push(distance);
}

sortDistance.sort((a, b) => b - a);
for(let i = 0; i < K - 1; i++){
    sortDistance.shift();
}

let result = sortDistance.reduce((acc, cur) => acc + cur, 0);
console.log(result);