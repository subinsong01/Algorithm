let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

//한 줄씩 입력 받기
for(let i = 1; i <= testCase; i++){
    let[r, s] = input[i].split(" "); //r=반복횟수, s=문자
    let result = "";
    
    for(let j = 0; j < s.length; j++){
        result += s.charAt(j).repeat(Number(r));
    }
    console.log(result);
}

