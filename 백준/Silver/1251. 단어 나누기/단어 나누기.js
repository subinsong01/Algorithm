let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let word = input;
let answer = "";

for(let i = 1; i < word.length - 1; i++){
    for(let j = i+1; j < word.length; j++){
        let part1 = word.substring(0, i);
        let part2 = word.substring(i, j);
        let part3 = word.substring(j);
        
        let reversed = part1.split('').reverse().join('') +
                       part2.split('').reverse().join('') +
                       part3.split('').reverse().join('');
        
       if (answer === "" || reversed < answer) {
            answer = reversed;
        }
      }
    }

 console.log(answer);  
