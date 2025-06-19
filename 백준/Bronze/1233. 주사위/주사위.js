let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

//주사위 S1, S2 = 2 ~ 20(면이 두개)
//S3 = 2 ~ 40(면이 세개)
let S1 = Number(input[0]);
let S2 = Number(input[1]);
let S3 = Number(input[2]);

let freq = new Array(S1 + S2 + S3 + 1).fill(0);

for (let i = 1; i <= S1; i++) {
  for (let j = 1; j <= S2; j++) {
    for (let k = 1; k <= S3; k++) {
      freq[i + j + k]++;
    }
  }
}

let maxCount = 0;
let answer = 0;

for (let i = 3; i <= S1 + S2 + S3; i++) {
  if (freq[i] > maxCount) {
    maxCount = freq[i];
    answer = i;
  }
}

console.log(answer);
