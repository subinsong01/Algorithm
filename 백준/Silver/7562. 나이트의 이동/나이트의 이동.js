let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);

for(let i = 1; i<= testCase; i++){
    let l = Number(input[i * 3 - 2]);//체스판의 크기 
    let start = input[i * 3  - 1].split(' ').map(Number); //시작 위치
    let target = input[i * 3].split(' ').map(Number);//목표 위치
    
    let startX = start[0], startY = start[1];
    let targetX = target[0], targetY = target[1]; 
    
    console.log(bfs(startX, startY, targetX,targetY, l))
}

function bfs(startX, startY, targetX, targetY, l){
    const dx = [-2, -1, 1, 2, 2, 1, -1, -2 ];
    const dy = [1, 2, 2, 1, -1, -2, -2, -1 ];
    
    const visited = Array.from(Array(l), () => Array(l).fill(false));
    const queue = [[startX, startY, 0]];//[x, y, 이동횟수]
    visited[startX][startY] = true;
    
    while(queue.length > 0){
        const[x, y, distance] = queue.shift();//현재 위치와 이동 횟수
        
        if(x === targetX && y === targetY){
            return distance;
        }
        
        for(let i=0; i< 8; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            
           // 체스판 범위를 벗어나지 않고, 아직 방문하지 않은 곳이면 큐에 넣음
            if (nx >= 0 && nx < l && ny >= 0 && ny < l && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, distance + 1]);
            }
        }
    }

    return -1; 
}
