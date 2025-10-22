const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

let result = 0;

for (let i = 1; i < N; i++) {
    let sum = i;
    let temp = i;

    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }

    if (sum === N) {
        result = i;
        break; 
    }
}

console.log(result);
