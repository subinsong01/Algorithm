let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let [N, K] = input.split(' ').map(Number);

function bfs(start, target) {
    let max = 100000;
    let visited = new Array(max + 1).fill(false); // 방문 체크 배열
    let deque = []; // 덱(Deque) 사용
    
    deque.unshift([start, 0]); // [현재 위치, 이동 횟수]
    visited[start] = true;

    while (deque.length !== 0) {
        let [current, time] = deque.pop(); // 뒤에서 꺼내기 (O(1))

        if (current === target) return time; // 동생 위치에 도착하면 종료

        for (let next of [current - 1, current + 1, current * 2]) {
            if (next >= 0 && next <= max && !visited[next]) { 
                deque.unshift([next, time + 1]); // 앞에 추가 (O(1))
                visited[next] = true;
            }
        }
    }
}

console.log(bfs(N, K)); // 결과 출력
