let file = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = file[0].split(" ").map(Number);
let num1 = file[1].split(" ").map(Number);
let num2 = file[2].split(" ").map(Number);

let result = [];
let i = 0, j = 0;

while (i < N && j < M) {
    if (num1[i] < num2[j]) {
        result.push(num1[i]);
        i++;
    } else {
        result.push(num2[j]);
        j++;
    }
}

while (i < N) result.push(num1[i++]);
while (j < M) result.push(num2[j++]);

console.log(result.join(' '));
