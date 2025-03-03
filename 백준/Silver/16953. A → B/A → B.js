let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let [A, B] = input.map(Number);
let numbers = 0;

function bfs(A, B){
    let queue = [[A, 1]];
    
    while(queue.length > 0){
        let [current, count] = queue.shift();
        
        if(current === B ) return count;
        
        let doubleNumber = current * 2;
        let plusOneToNumber = current * 10 + 1;
        
        if (doubleNumber <= B) queue.push([doubleNumber, count + 1]);
        if (plusOneToNumber <= B) queue.push([plusOneToNumber, count + 1]);
    
    }
    return -1;
}
console.log(bfs(A, B));