let file = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = file[0].split(" ").map(Number);

result = num.sort((a,b)=> a-b).join(' ')
console.log(result);