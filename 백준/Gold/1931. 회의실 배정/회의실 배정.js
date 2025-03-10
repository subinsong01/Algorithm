let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = parseInt(input[0]);
let meetings = [];

for(let i = 1; i <= N; i++){
    let [start, end] = input[i].split(' ').map(Number);
    meetings.push([start, end]);
}

// 종료 시간을 기준으로 정렬, 종료 시간이 같으면 시작 시간이 빠른 순으로 정렬
meetings.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);

let count = 0;
let endTime = 0;

for(let [start, end] of meetings){
    if(start >= endTime){
        count++;
        endTime = end;
    }
}

console.log(count);