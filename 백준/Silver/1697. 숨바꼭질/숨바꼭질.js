let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [N, K] = input[0].split(' ').map(Number);

function bfs(start, target){
    const MAX = 100000;
    let queue = [[start,0]];//현재 위치, 이동 횟수
    let visited = Array(MAX+1).fill(false);
    
    visited[start] = true;
    
    while(queue.length > 0){
        const[current, count] = queue.shift();
        
        if(current === target ){
            return count;
        }
        
        for (let next of [current - 1, current + 1, current * 2]) {
            if (next >= 0 && next <= MAX && !visited[next]) {
                visited[next] = true;
                queue.push([next, count + 1]);
            }
        }
    }
}
console.log(bfs(N, K));