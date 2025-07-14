const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
const nums = input.split(' ').map(Number);

function results(nums) {
  let n = 1;
  while (true) {
    let count = 0;
    for (let num of nums) {
      if (n % num === 0) count++;
    }
    if (count >= 3) return n;
    n++;
  }
}


console.log(results(nums));
