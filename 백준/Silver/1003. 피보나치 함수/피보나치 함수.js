let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);
let testCases = [];
let maxN = 0;

for (let i = 1; i <= T; i++) {
    let n = Number(input[i]);
    testCases.push(n);
    if (n > maxN) {
        maxN = n;
    }
}

let dp = Array.from({ length: maxN + 1 }, () => [0, 0]);
dp[0] = [1, 0];
dp[1] = [0, 1];

for (let i = 2; i <= maxN; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
    dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
}

for (let n of testCases) {
    console.log(dp[n][0], dp[n][1]);
}
