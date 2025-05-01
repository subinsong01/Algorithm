let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let books = Number(input[0]);
let dic = {}; //책 제목, 판매 수
for (let i = 1; i <= books; i++) {
  let bookName = input[i];
  if (dic[bookName]) {
    dic[bookName]++;
  } else {
    dic[bookName] = 1;
  }
}

let maxCount = 0;
let maxBook = "";

for (let book in dic) {
  if (dic[book] > maxCount) {
    maxCount = dic[book];
    maxBook = book;
  } else if (dic[book] === maxCount) {
    if (book < maxBook) {
      maxBook = book;
    }
  }
}
console.log(maxBook);
