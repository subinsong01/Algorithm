//A=5분,B=1분,C=10초
//최소버튼조작
//T=시간(100초)


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = parseInt(input[0]); 
let buttons = [300, 60, 10];  

let result = [0, 0, 0];

for (let i = 0; i < buttons.length; i++) {
    result[i] = Math.floor(T / buttons[i]);
    T %= buttons[i];
}
if (T > 0) {
    console.log(-1);
} else {
    console.log(result.join(' '));
}
