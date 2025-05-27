const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);

const tree = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i < N; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  tree[a].push(b);
  tree[b].push(a);
}

const parent = Array(N + 1).fill(0);
const visited = Array(N + 1).fill(false);

function dfs(node) {
  visited[node] = true;
  for (const neighbor of tree[node]) {
    if (!visited[neighbor]) {
      parent[neighbor] = node; 
      dfs(neighbor);
    }
  }
}


dfs(1);

for (let i = 2; i <= N; i++) {
  console.log(parent[i]);
}
