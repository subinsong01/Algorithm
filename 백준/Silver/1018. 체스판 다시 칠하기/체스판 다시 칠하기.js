const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1);

let minPaint = Infinity;

for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
        let count1 = 0; 
        let count2 = 0; 

        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                const current = board[i + x][j + y];
                const shouldBeW = (x + y) % 2 === 0; 

                if (shouldBeW) {
                    if (current !== 'W') count1++; 
                    if (current !== 'B') count2++;
                } else {
                    if (current !== 'B') count1++;
                    if (current !== 'W') count2++;
                }
            }
        }

        minPaint = Math.min(minPaint, count1, count2);
    }
}

console.log(minPaint);
