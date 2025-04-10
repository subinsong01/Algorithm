function solution(n) {
  const oneCount = n.toString(2).split('1').length - 1;

  let next = n + 1;
  while (true) {
    const nextCount = next.toString(2).split('1').length - 1;
    if (nextCount === oneCount) {
      return next;
    }
    next++;
  }
}
