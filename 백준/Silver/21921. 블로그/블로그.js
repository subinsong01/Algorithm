let file = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [n, x] = file[0].split(" ").map(Number);
let arr = file[1].split(" ").map(Number); 

let sum = 0;

for (let i = 0; i < x; i++) {
    sum += arr[i];
}

let maxSum = sum;
let count = 1;

// 슬라이딩 윈도우 시작
for (let i = x; i < n; i++) {
    sum = sum + arr[i] - arr[i - x];

    if (sum > maxSum) {
        maxSum = sum;
        count = 1;
    } else if (sum === maxSum) {
        count++;
    }
}

if (maxSum === 0) {
    console.log("SAD");
} else {
    console.log(maxSum);
    console.log(count);
}
