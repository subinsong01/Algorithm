let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let total_stairs = input[0];
if (total_stairs === 1) {
    console.log(input[1]);
    return;
}

let dp = new Array(total_stairs + 1).fill(0);
dp[1] = input[1];
dp[2] = input[1] + input[2];

if (total_stairs > 2) {
    dp[3] = Math.max(input[1], input[2]) + input[3];

    for (let i = 4; i <= total_stairs; i++) {
        dp[i] = Math.max(dp[i - 2], dp[i - 3] + input[i - 1]) + input[i];  // ✅ 여기서 ) 수정
    }
}

console.log(dp[total_stairs]);
