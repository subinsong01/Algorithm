let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let [N, M, L] = input.map(Number);
//N = 사람수
//M = 한 사람이 공을 N번 받으면 종료
//L = 공을 던질 때 기준으로 L번째 사람아게 줌

let cnt = Array(N).fill(0);
let current = 0;
let throwCount = 0;

while (true) {
  cnt[current]++;

  if (cnt[current] === M) {
    break;
  }

  if (cnt[current] % 2 === 1) {
    current = (current + L) % N;
  } else {
    current = (current - L + N) % N;
  }
  throwCount++;
}
console.log(throwCount);
