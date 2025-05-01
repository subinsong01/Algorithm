function solution(s) {
  const once = new Set();
  const duplicates = new Set();

  for (let char of s) {
    if (once.has(char)) {
      once.delete(char);
      duplicates.add(char);
    } else if (!duplicates.has(char)) {
      once.add(char);
    }
  }

  return [...once].sort().join('');
}
