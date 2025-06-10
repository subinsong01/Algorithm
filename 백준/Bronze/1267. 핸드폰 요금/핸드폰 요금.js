const input = require('fs').readFileSync(0).toString().trim().split('\n');
const calls = input[1].split(' ').map(Number);

const y = t => Math.ceil((t + 1) / 30) * 10;
const m = t => Math.ceil((t + 1) / 60) * 15;

const yTotal = calls.map(y).reduce((a, b) => a + b, 0);
const mTotal = calls.map(m).reduce((a, b) => a + b, 0);

if (yTotal < mTotal) {
  console.log(`Y ${yTotal}`);
} else if (yTotal > mTotal) {
  console.log(`M ${mTotal}`);
} else {
  console.log(`Y M ${yTotal}`);
}
