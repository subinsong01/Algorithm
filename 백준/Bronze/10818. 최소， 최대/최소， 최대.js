let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

// 배열이 비어있지 않은 경우에만 첫 번째 요소로 초기화
let minValue = n > 0 ? arr[0] : undefined;
let maxValue = n > 0 ? arr[0] : undefined;

for (let i = 0; i < n; i++) {
    if (minValue === undefined || minValue > arr[i]) {
        minValue = arr[i];
    }
    if (maxValue === undefined || maxValue < arr[i]) {
        maxValue = arr[i];
    }
}

console.log(minValue, maxValue);
