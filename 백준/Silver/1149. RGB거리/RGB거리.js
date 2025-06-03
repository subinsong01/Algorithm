const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const costs = input.slice(1).map(line => line.split(' ').map(Number));

const dp = Array.from({ length: N }, () => Array(3).fill(0));

dp[0][0] = costs[0][0];  
dp[0][1] = costs[0][1];
dp[0][2] = costs[0][2]; 

// DP 점화식 계산
for (let i = 1; i < N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
}

const result = Math.min(...dp[N - 1]);
console.log(result);
