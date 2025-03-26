let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let words = input.slice(1); //slice가 있으면 N만큼 반복문 안 돌려도 된다..

let sortedWords = [...new Set(words)].sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length; //길이 순 정렬
  }
  return a.localeCompare(b); //localeCompare => 사전순 정렬
});
console.log(sortedWords.join("\n"));
