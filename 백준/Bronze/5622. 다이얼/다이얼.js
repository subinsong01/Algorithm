const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const arr = [
  'ABC', 
  'DEF', 
  'GHI',  
  'JKL', 
  'MNO',  
  'PQRS',
  'TUV', 
  'WXYZ' 
];

let total = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].includes(input[i])) {
      total += j + 3; 
      break;
    }
  }
}

console.log(total);
