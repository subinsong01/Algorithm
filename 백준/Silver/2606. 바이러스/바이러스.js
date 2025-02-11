let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let computer = parseInt(input[0]);  
let connectLine = parseInt(input[1]);  

let graph = Array.from({ length: computer + 1 }, () => []);
for (let i = 2; i < 2 + connectLine; i++) {
    let [c1, c2] = input[i].split(' ').map(Number);
    graph[c1].push(c2);
    graph[c2].push(c1);
}

function bfs(start) {
    let queue = [start];
    let visited = Array(computer + 1).fill(false);
    visited[start] = true;
    let count = 0;

    while (queue.length > 0) {
        let node = queue.shift();
        for (let next of graph[node]) {
            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
                count++;
            }
        }
    }
    return count;
}

console.log(bfs(1)); 
