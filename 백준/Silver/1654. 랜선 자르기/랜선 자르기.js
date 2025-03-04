let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//K = 이미 가지고 있는 랜선 개수, N = 필요한 랜선 개수
let [K, N] = input[0].split(' ').map(Number);
let lines = input.slice(1, K + 1).map(Number); 

let left = 1;
let right = Math.max(...lines);
let answer = 0;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = lines.reduce((sum, len) => sum + Math.floor(len / mid), 0); // mid 길이로 잘랐을 때 몇 개 나오는지 계산

    if (count >= N) { 
        answer = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(answer);