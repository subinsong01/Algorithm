let file = require('fs').readFileSync('/dev/stdin').toString().split('\n');

//학생 수 = 2n

let studentsNum = parseInt(file[0]) * 2
let studentLevels = file[1].toString().split(' ').map(Number);
let arrStudentLevels = studentLevels.sort((a, b) => a - b);

let minLevel = Infinity; 

for (let i = 0; i < arrStudentLevels.length / 2; i++){
    let teamLevel = arrStudentLevels[i] + arrStudentLevels[studentsNum - 1 - i];
    minLevel = Math.min(minLevel, teamLevel); 
}

console.log(minLevel);