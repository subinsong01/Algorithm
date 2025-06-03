const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const X = parseInt(input, 10);

const count = X.toString(2).split('').filter(bit => bit === '1').length;

console.log(count);
