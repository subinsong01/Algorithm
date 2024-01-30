let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testNumber = Number(input[0]);

for (let t = 1; t <= testNumber; t++) {
    let data = input[t].split(' ').map(Number);
    let n = data[0];
    let sum_average = 0;
    for (let i = 1; i <= n; i++) {
        sum_average += data[i];
    }
    let average = sum_average / n;
    let cnt = 0; // 평균 값을 넘는 학생의 수
    for (let i = 1; i <= n; i++) {
        if (data[i] > average) cnt += 1;
    }
    console.log(`${(cnt / n * 100).toFixed(3)}%`);
}
