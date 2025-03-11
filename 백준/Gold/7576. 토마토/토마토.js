let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

let [M, N] = input[0].split(" ").map(Number);
let tomato_graph = [];
let queue = []; // BFS를 위한 큐
let unripeCount = 0; 
let days = 0;

for (let i = 1; i <= N; i++) {
    let row = input[i].split(" ").map(Number);
    tomato_graph.push(row);
    for (let j = 0; j < M; j++) {
        if (row[j] === 1) {
            queue.push([i - 1, j, 0]); //익은 토마토 위치 알려주는 역할
        } else if (row[j] === 0) {
            unripeCount++; //bfs로 모든 토마토가 익었는지 확인하는 데 사용
        }
    }
}

function bfs() {
    let front = 0; 
    while (front < queue.length) {
        let [x, y, day] = queue[front++];
        days = Math.max(days, day); 

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx >= 0 && nx < N && ny >= 0 && ny < M && tomato_graph[nx][ny] === 0) {
                tomato_graph[nx][ny] = 1; 
                queue.push([nx, ny, day + 1]); 
                unripeCount--; 
            }
        }
    }
}

bfs();

console.log(unripeCount === 0 ? days : -1);
