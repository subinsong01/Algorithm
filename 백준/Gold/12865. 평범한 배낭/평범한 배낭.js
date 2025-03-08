let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N, K] = input[0].split(' ').map(Number);
let items = [];

for(let i = 1; i <= N; i++){
    let [W, K] = input[i].split(' ').map(Number);
    items.push([W, K]);
}
let dp = Array(K + 1).fill(0)//k = 배낭용량
//dp 알고리즘
for(let i = 0; i < N; i++){
    let [weight, value] = items[i];
    // 용량을 큰 값부터 처리하여 이전 값을 덮어쓰지 않도록 함
    for(let w = K; w >= weight; w--){ //k = 배낭용량
        dp[w] = Math.max(dp[w], dp[w - weight] + value);
    }//dp[w] = 배낭 용량 w에서 얻을 수 있는 최대 가치
}
console.log(dp[K]);