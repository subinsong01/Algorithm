let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

for(let i=1; i<= N; i++){
    let blank = ' '.repeat(N-i);
    let star = '*'.repeat(i);
    console.log(blank + star);
}
