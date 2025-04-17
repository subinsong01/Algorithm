let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("")
  .split("\n");
//666 = 종말을 나타내는 수(6이 적어도 3개 이상 연속으로 들어가는 수)
const N = Number(input);
let count = 0;
let num = 666;
while (true) {
  if (String(num).includes(666)) {
    count++;
    if (count === N) {
      console.log(num);
      break;
    }
  }
  num++;
}