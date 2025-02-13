let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M, R] = input[0].split(' ').map(Number);
let graph = Array.from({length: N + 1}, ()=>[]);
let visited = Array(N+1).fill(0);

for (let i = 1; i <= M; i++) { 
    let [u, v] = input[i].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

graph.forEach((edges) => edges.sort((a, b) => a - b));

function bfs(start) {
    let queue = [start];
    let count = 1;
    visited[start] = count; 

    while (queue.length > 0) {
        let node = queue.shift(); 
        
        for (let next of graph[node]) {
            if (!visited[next]) { 
                count++; 
                visited[next] = count;
                queue.push(next); 
            }
        }
    }
}

bfs(R);

console.log(visited.slice(1).join('\n'));
