//abc > ab(c를 빼기)
//ca > abc(a<->c)=1 > ac (b)넣기=2, acb > abc(c<->b)바꿔주기
//3
//abc
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let A = input[0];
let B = input[1];
let m = A.length;
let n = B.length;

const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

//초기화
for (let i = 0; i <= m; i++) dp[i][0] = i;
for (let j = 0; j <= n; j++) dp[0][j] = j;

//점화식
for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= n; j++) {
    if (A[i - 1] === B[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1];
    } else {
      dp[i][j] =
        1 +
        Math.min(
          dp[i - 1][j], //삭제
          dp[i][j - 1], //삽입
          dp[i - 1][j - 1] //교체
        );
    }
  }
}
console.log(dp[m][n]);
