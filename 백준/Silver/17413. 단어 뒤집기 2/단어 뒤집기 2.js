const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let result = '';
let stack = [];
let tag = false;

for (let i = 0; i < input.length; i++) {
  const ch = input[i];

  if (ch === '<') {
    while (stack.length) result += stack.pop();
    tag = true;
    result += ch;
  } else if (ch === '>') {
    tag = false;
    result += ch;
  } else if (tag) {
    result += ch;
  } else {
    if (ch === ' ') {
      while (stack.length) result += stack.pop();
      result += ' ';
    } else {
      stack.push(ch);
    }
  }
}
while (stack.length) result += stack.pop();

console.log(result);
