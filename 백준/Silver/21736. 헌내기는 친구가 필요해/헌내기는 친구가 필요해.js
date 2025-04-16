let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);
//dfs문제
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let campus = input.slice(1).map((line) => line.split(""));
let visited = Array.from({ length: N }, () => Array(M).fill(false));

let count = 0; //만난 사람 수
let startX = 0,
  startY = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (campus[i][j] === "I") {
      startX = i;
      startY = j;
    }
  }
}
function dfs(x, y) {
  visited[x][y] = true;

  if (campus[x][y] === "P") count++;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < M &&
      !visited[nx][ny] &&
      campus[nx][ny] !== "X"
    ) {
      dfs(nx, ny);
    }
  }
}

dfs(startX, startY);
console.log(count === 0 ? "TT" : count);
