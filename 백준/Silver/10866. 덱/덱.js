let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const deque = [];
const result = [];

for (let i = 1; i <= N; i++) {
  const nums = input[i].split(" ");

  switch (nums[0]) {
    case "push_front":
      deque.unshift(Number(nums[1]));
      break;

    case "push_back":
      deque.push(Number(nums[1]));
      break;

    case "pop_front":
      result.push(deque.length ? deque.shift() : -1);
      break;

    case "pop_back":
      result.push(deque.length ? deque.pop() : -1);
      break;

    case "size":
      result.push(deque.length);
      break;
    case "empty":
      result.push(deque.length ? 0 : 1);
      break;
    case "front":
      result.push(deque.length ? deque[0] : -1);
      break;
    case "back":
      result.push(deque.length ? deque[deque.length - 1] : -1);
      break;
  }
}
console.log(result.join("\n"));
