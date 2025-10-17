const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const options = input.slice(1);

const alpha = new Set(); 

function answer(option) {
  const words = option.split(" ");

  // 각 단어의 첫 글자
  for (let i = 0; i < words.length; i++) {
    const ch = words[i][0];
    if (!alpha.has(ch.toLowerCase())) {
      alpha.add(ch.toLowerCase());
      words[i] = `[${ch}]` + words[i].slice(1);
      return words.join(" ");
    }
  }

  // 왼쪽부터 전체 문자열 돌기 
  for (let i = 0; i < option.length; i++) {
    const ch = option[i];
    if (ch === " ") continue;
    if (!alpha.has(ch.toLowerCase())) {
      alpha.add(ch.toLowerCase());
      return option.slice(0, i) + `[${ch}]` + option.slice(i + 1);
    }
  }
    
  return option;
}

options.forEach((opt) => {
  console.log(answer(opt));
});
