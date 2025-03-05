let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [V, E] = input[0].split(' ').map(Number);
let K = parseInt(input[1]);

// 그래프 초기화 (인접 리스트)
let graph = Array.from({ length: V + 1 }, () => []);
for (let i = 2; i < E + 2; i++) {
    let [u, v, w] = input[i].split(' ').map(Number);
    graph[u].push([v, w]);
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent][0] <= this.heap[i][0]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let i = 0;
        while (2 * i + 1 < this.heap.length) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = left;
            if (right < this.heap.length && this.heap[right][0] < this.heap[left][0]) {
                smallest = right;
            }
            if (this.heap[i][0] <= this.heap[smallest][0]) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
        return min;
    }

    size() {
        return this.heap.length;
    }
}

function dijkstra(start) {
    const INF = Infinity;
    const distance = Array(V + 1).fill(INF);
    distance[start] = 0;

    const pq = new MinHeap();
    pq.push([0, start]); // (거리, 노드)

    while (pq.size()) {
        const [dist, now] = pq.pop();
        if (distance[now] < dist) continue;

        for (const [next, weight] of graph[now]) {
            let cost = dist + weight;
            if (cost < distance[next]) {
                distance[next] = cost;
                pq.push([cost, next]);
            }
        }
    }

    return distance.slice(1).map(d => (d === INF ? "INF" : d));
}

console.log(dijkstra(K).join("\n"));
