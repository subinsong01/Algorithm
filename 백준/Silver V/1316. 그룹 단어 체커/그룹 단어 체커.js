let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function check(word) {
    let seenChars = new Set();

    for (let i = 0; i < word.length; i++) {
        let char = word[i];

        if (seenChars.has(char) && word[i - 1] !== char) {
            return false;
        }

        seenChars.add(char);
    }

    return true;
}

let n = Number(input[0]);
let summary = 0;

for (let i = 1; i <= n; i++) {
    let data = input[i];
    if (check(data)) summary += 1;
}

console.log(summary);
