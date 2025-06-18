//가중치를 계산 > 숫자 배정하고 > 다 더하기
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let words = input.slice(1);

const weight = {}; //객체(가중치 저장해야함 > key : value)

//문자별 가중치 계산
for (let word of words) {
  let len = word.length;
  for (let i = 0; i < len; i++) {
    const char = word[i];
    const power = len - i - 1;
    weight[char] = (weight[char] || 0) + Math.pow(10, power);
  }
}

//가중치 높은 문자부터 정렬
const sorted = Object.entries(weight)
  .sort((a, b) => b[1] - a[1])
  .map(([char]) => char);

//9부터 숫자 배정
const charToDigit = {};
let digit = 9;
for (let char of sorted) {
  charToDigit[char] = digit--;
}

// 각 단어를 숫자로 바꿔 합산
let total = 0;
for (let word of words) {
  let numStr = "";
  for (let ch of word) {
    numStr += charToDigit[ch];
  }
  total += parseInt(numStr, 10);
}

console.log(total);
