const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
if (N === 0) {
    console.log(0);
    return;
}

const weights = input[1].split(' ').map(Number);

let box= 1;
let currentWeight = 0;

for (let i = 0; i < N; i++) {
    if (currentWeight + weights[i] > M) {
        box++;
        currentWeight = weights[i];
    } else {
        currentWeight += weights[i];
    }
}

console.log(box);
