const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [N, M] = input.split(' ').map(Number)

const coin = N * 100 
if( coin >= M ){
    console.log('Yes')
}else{
    console.log('No')
}