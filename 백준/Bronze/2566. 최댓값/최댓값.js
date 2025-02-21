let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let grid = input.map(line => line.split(' ').map(Number));

let maxNumber = 0;  //최댓값
let maxRow = 0, maxCol = 0;  // 최댓값 위치

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (grid[i][j] > maxNumber) { 
            maxNumber = grid[i][j];
            maxRow = i;
            maxCol = j;
        }
    }
}

console.log(maxNumber);
console.log(maxRow + 1, maxCol + 1);
