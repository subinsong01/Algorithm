let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for(let i = 0; i < input.length; i++){
    let number = input[i].trim();
    
    if(number === "0"){
        break;
    }
    
    let reversedNumber = number.split("").reverse().join("");
    if(number === reversedNumber){
        console.log("yes");
    }else{
        console.log("no");
    }
}
