let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let [H, W, N] = input[i].split(' ').map(Number);
  let floor = N % H === 0 ? H : N % H;
  let room = Math.ceil(N / H);

  console.log(`${floor}${room < 10 ? '0' + room : room}`);
}
