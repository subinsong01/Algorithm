/*피타고라스의 정의를 이용해서 적용*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [D, H, W] = input;

const k = D / Math.sqrt(H ** 2 + W ** 2);
const height = Math.floor(k * H);
const width = Math.floor(k * W);

console.log(height, width);
