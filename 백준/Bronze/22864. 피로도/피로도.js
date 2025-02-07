let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [A, B, C, M] = input[0].split(' ').map(Number);

let current_tired = 0;
let totalWork = 0;
let time = 0;

while(time < 24) {
    if(current_tired + A <= M) {  
        current_tired += A;
        totalWork += B;
    } else {  
        current_tired -= C;
        if(current_tired < 0) {
            current_tired = 0; 
        }
    }
    time++;  
}

console.log(totalWork);
