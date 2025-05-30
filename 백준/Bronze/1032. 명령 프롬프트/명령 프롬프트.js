const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const files = input.slice(1);

const length = files[0].length;
let p = '';

for (let i = 0; i < length; i++) {
  const char = files[0][i];
  let same = true;

  for (let j = 1; j < n; j++) {
    if (files[j][i] !== char) {
      same = false;
      break;
    }
  }

  p += same ? char : '?';
}

console.log(p);
