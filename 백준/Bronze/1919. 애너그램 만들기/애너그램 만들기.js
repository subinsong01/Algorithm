let file = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const str1 = file[0].trim();
const str2 = file[1].trim();

function getCountStr(word){
    let count = new Array(26).fill(0)
    for(let char of word){
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    return count;
}
let count1 = getCountStr(str1);
let count2 = getCountStr(str2);

let different = 0;

for(let i = 0; i<26; i++){
    different += Math.abs(count1[i]-count2[i])
}

console.log(different);

