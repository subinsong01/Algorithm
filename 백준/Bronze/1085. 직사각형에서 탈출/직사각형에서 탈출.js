const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [x, y, w, h] = input;

const dis = Math.min(x, y, w - x, h - y);
console.log(dis);