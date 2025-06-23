const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M, k] = input[0].split(" ").map(Number);
let friendCosts = input[1].split(" ").map(Number); 

let relations = [];
for (let i = 0; i < M; i++) {
  let [v, w] = input[i + 2].split(" ").map(Number);
  relations.push([v - 1, w - 1]); 
}

// 유니온 파인드 초기화
let parent = Array(N)
  .fill(0)
  .map((_, i) => i);

function find(x) {
  if (parent[x] !== x) {
    parent[x] = find(parent[x]); // 경로 압축
  }
  return parent[x];
}

function union(x, y) {
  const rootX = find(x);
  const rootY = find(y);

  if (rootX === rootY) return;

  // 더 친구비가 싼 쪽을 루트로 유지
  if (friendCosts[rootX] < friendCosts[rootY]) {
    parent[rootY] = rootX;
  } else {
    parent[rootX] = rootY;
  }
}

// 친구 관계로 그룹 묶기
for (let [v, w] of relations) {
  union(v, w);
}

//각 그룹 루트별로 최소 친구비 찾기
let groupMinCost = new Array(N).fill(Infinity);
for (let i = 0; i < N; i++) {
  const root = find(i);
  groupMinCost[root] = Math.min(groupMinCost[root], friendCosts[i]);
}

// 그룹별 최소 친구비 합산
let totalCost = 0;
for (let cost of groupMinCost) {
  if (cost !== Infinity) {
    totalCost += cost;
  }
}

// 출력
if (totalCost <= k) {
  console.log(totalCost);
} else {
  console.log("Oh no");
}
