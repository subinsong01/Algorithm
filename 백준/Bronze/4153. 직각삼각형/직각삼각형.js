let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let sides = input[i].split(' ').map(Number).sort((a, b) => a - b);
  let [a, b, c] = sides;

  if (a === 0 && b === 0 && c === 0) break;

  console.log(a ** 2 + b ** 2 === c ** 2 ? "right" : "wrong");
}
