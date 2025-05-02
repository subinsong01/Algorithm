let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const alphabet = ["dz=", "lj", "nj", "c=", "c-", "d-", "s=", "z="];

for (let a of alphabet) {
  input = input.split(a).join("∗");  
}

console.log(input.length);
