const fs = require("fs");
const word = fs.readFileSync("/dev/stdin").toString().trim(); 

const upperWord = word.toUpperCase(); 
let count = {}; // 알파벳 개수 저장 


for (let i = 0; i < upperWord.length; i++) {
  let ch = upperWord[i];
  if (count[ch]) {
    count[ch] += 1; 
  } else {
    count[ch] = 1; 
  }
}

let maxCount = 0;
for (let key in count) {
  if (count[key] > maxCount) {
    maxCount = count[key];
  }
}

//최댓값 알파벳 개수 count 
let result = "";
let countMax = 0;

for (let key in count) {
  if (count[key] === maxCount) {
    result = key;
    countMax += 1;
  }
}

if (countMax > 1) {
  console.log("?");
} else {
  console.log(result);
}
