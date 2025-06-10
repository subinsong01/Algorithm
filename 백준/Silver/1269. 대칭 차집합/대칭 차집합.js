const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const setA = new Set(input[1].split(' ').map(Number));
const setB = new Set(input[2].split(' ').map(Number));

let count = 0;

for (const num of setA) {
    if (!setB.has(num)) count++;
}

for (const num of setB) {
    if (!setA.has(num)) count++;
}

console.log(count);
