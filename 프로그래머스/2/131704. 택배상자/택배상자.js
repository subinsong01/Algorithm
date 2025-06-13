function solution(order) {
  const stack = [];
  let box = 1; 
  let count = 0;

  for (let i = 0; i < order.length; i++) {
    const T = order[i]; 

    while (box <= order.length && box < T) {
      stack.push(box);
      box++;
    }

    if (box === T) {
      count++;
      box++;
    } else if (stack[stack.length - 1] === T) {
      stack.pop();
      count++;
    } else {
      break;
    }
  }

  return count;
}
