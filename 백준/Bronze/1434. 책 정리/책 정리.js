const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const box = input[1].split(' ').map(Number);
const book = input[2].split(' ').map(Number);

let currentBox = 0; // 현재 박스
let boxUsed = Array(N).fill(0); // 박스에 들어간 책 크기 합

for (let i = 0; i < M; i++) { 
    while (true) {
        if (boxUsed[currentBox] + book[i] <= box[currentBox]) {
            boxUsed[currentBox] += book[i];
            break; 
        } else {
            currentBox++;
        }
    }
}

let wasted = 0;
for (let i = 0; i < N; i++) {
    wasted += box[i] - boxUsed[i]; 
}

console.log(wasted);
