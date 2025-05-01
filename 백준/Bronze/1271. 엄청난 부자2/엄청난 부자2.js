let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let n = BigInt(input[0]); 
let m = BigInt(input[1]);

let moneyPerPerson = n / m;
let remainder = n % m;

console.log(moneyPerPerson.toString());
console.log(remainder.toString());
