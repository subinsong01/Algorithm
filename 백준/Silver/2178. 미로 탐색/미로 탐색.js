let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let graph = input.slice(1, N + 1).map(line => line.split('').map(Number));

let dx = [-1, 1, 0, 0];
let dy = [0, 0, 1, -1];
function bfs(){
    let queue = [[0, 0]]
    let visited = Array.from({length : N}, () => Array(M).fill(false));
    
    visited[0][0] = true; //시작점
    
    while(queue.length){
        let [x, y] = queue.shift();
        
        for(let i = 0; i < 4; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            
            if(nx >= 0 && ny >= 0 && nx < N && ny < M && graph[nx][ny] === 1 && !visited[nx][ny]){
                visited[nx][ny] = true;
                graph[nx][ny] = graph[x][y] + 1;
                queue.push([nx, ny])
            }
        }
    }
    return graph[N - 1][M - 1];
}
console.log(bfs());