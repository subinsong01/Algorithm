function solution(x, y, n) {
  if (x === y) return 0;

  const visited = new Array(y + 1).fill(false);
  const queue = [];
  let front = 0;

  queue.push({ value: x, count: 0 });
  visited[x] = true;

  while (front < queue.length) {
    const { value, count } = queue[front++];
    const k = [value + n, value * 2, value * 3];

    for (const next of k) {
      if (next === y) return count + 1;

      if (next <= y && !visited[next]) {
        visited[next] = true;
        queue.push({ value: next, count: count + 1 });
      }
    }
  }

  return -1;
}
