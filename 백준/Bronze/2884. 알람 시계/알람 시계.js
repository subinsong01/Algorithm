let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let hour = Number(input[0].split(' ')[0]);
let minutes = Number(input[0].split(' ')[1]);

if (minutes < 45){
    hour -= 1;
    minutes += 15;
    if (hour < 0) hour = 23;
}
else minutes -= 45;

console.log(hour + " " + minutes);
