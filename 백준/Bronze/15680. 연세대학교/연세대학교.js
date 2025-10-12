/*
N = 0일 경우: 연세대학교의 영문명을 출력한다.
N = 1일 경우: 연세대학교의 슬로건을 출력한다.
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input);
if( N == 0 ){
    console.log('YONSEI')
}else{
    console.log('Leading the Way to the Future')
}