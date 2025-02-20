let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M, V] = input[0].split(' ').map(Number);
let graph = Array.from({ length: N + 1 }, () => []);

for(let i=1; i<=M; i++){
    let [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}
graph.forEach(adj => adj.sort((a,b) => a-b));

//DFS
function DFS(start){
    let visited = [];
    let stack = [start];
    let visitedSet = new Set(); 

    while(stack.length){
        let node = stack.pop();
        if(!visitedSet.has(node)){
            visited.push(node);
            visitedSet.add(node);
            stack.push(...graph[node].slice().reverse());
        }
    }
    return visited;
}

function BFS(start){
    let visited = [];
    let queue = [start];
    let visitedSet = new Set();
    
    while(queue.length){
        let node = queue.shift();
        if(!visitedSet.has(node)){
            visited.push(node);
            visitedSet.add(node);
            queue.push(...graph[node]);
        }
    }
    return visited;
}
console.log(DFS(V).join(' '));
console.log(BFS(V).join(' '));
    
  