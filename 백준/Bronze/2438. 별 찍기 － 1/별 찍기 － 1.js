let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);//받을 값 
let result = "";
for(i=0; i<n; i++){
    for(j=0; j<=i; j++){
        result += "*";   
    }
    result += "\n";
}

console.log(result);