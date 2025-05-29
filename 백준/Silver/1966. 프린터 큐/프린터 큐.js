const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const [N, M] = input[line++].split(" ").map(Number);
  const priorities = input[line++].split(" ").map(Number);

  let queue = priorities.map((priority, idx) => ({ index: idx, priority }));

  let count = 0;
  while (queue.length) {
    const current = queue.shift();
    const higher = queue.some(doc => doc.priority > current.priority);

    if (higher) {
      queue.push(current); 
    } else {
      count++; 
      if (current.index === M) {
        console.log(count);
        break;
      }
    }
  }
}
