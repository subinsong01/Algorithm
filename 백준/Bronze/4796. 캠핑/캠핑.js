//캠핑장을 연속하는 P일 중 L일 동안만 사용 가능
//강산이는 V일짜리 휴가를 시작했다
//강산이는 최대 며칠동안 사용이 가능할까?(1 < L < P < V)

//5, 8, 20 > 14
//5, 8, 17 > 11 
//아이디어 V a/ P의 몫 * L + 나머지

let file = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < file.length; i++) {
  let arr = file[i].split(' ').map(Number);
  
  let L = arr[0];
  let P = arr[1];
  let V = arr[2];

  if (L === 0 && P === 0 && V === 0) break;

  let answer = Math.floor(V / P) * L + Math.min(V % P, L);
  console.log(`Case ${i + 1}: ${answer}`);
}
