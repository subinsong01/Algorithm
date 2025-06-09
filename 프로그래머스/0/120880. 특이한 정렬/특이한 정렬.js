function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const x = Math.abs(a - n);
    const y = Math.abs(b - n);

    if (x === y) {
      return b - a; 
    }
    return x - y; 
  });
}
