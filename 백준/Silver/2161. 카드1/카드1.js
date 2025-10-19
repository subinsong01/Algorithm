const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);
const queue = [];
for (let i = 1; i <= N; i++) queue.push(i);

const d = [];

while (queue.length > 1) {
  d.push(queue.shift());
  queue.push(queue.shift());
}

console.log([...d, queue[0]].join(' '));
