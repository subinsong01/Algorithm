let file = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let T = parseInt(file[0]); 
let N = [] 
let answer = []

for (let i = 1; i <= T; i++) {
    N.push(parseInt(file[i]));
}

for (let i = 0; i < T; i++) {
    let first = N[i];
    let second = first + 1; 

    let firstLastTwo = first % 100; 
    let secondLastTwo = second % 100;

    if (second % firstLastTwo === 0) { 
        answer.push('Good')
    } else {
        answer.push('Bye');
    }
}

console.log(answer.join('\n'));
