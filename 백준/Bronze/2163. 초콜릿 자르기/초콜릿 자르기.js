const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(Number)
console.log(N * M - 1)
