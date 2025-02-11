let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = parseInt(input[0]); 
let [n1, n2] = input[1].split(' ').map(Number); 
let m = parseInt(input[2]); 

let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 3; i < 3 + m; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

function bfs(start, target) {
    let queue = [[start, 0]]; // [현재 노드, 촌수]
    let visited = Array(n + 1).fill(false);
    visited[start] = true;

    while (queue.length > 0) {
        let [node, count] = queue.shift();

        if (node === target) return count;

        for (let next of graph[node]) {
            if (!visited[next]) {
                visited[next] = true;
                queue.push([next, count + 1]);
            }
        }
    }
    return -1; 
}

console.log(bfs(n1, n2));
