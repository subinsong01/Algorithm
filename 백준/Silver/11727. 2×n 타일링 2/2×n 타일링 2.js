const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const MOD = 10007;
const dp = new Array(input + 1).fill(0);

dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % MOD;
}

console.log(dp[input]);
