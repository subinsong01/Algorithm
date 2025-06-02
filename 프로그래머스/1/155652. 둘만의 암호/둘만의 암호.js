function solution(s, skip, index) {
  const alphabet = [];
  for (let i = 0; i < 26; i++) {
    const ch = String.fromCharCode(97 + i); 
    if (!skip.includes(ch)) {
      alphabet.push(ch);
    }
  }

  let result = '';
  for (const char of s) {
    const p = alphabet.indexOf(char); 
    const newAlphabet = (p + index) % alphabet.length;
    result += alphabet[newAlphabet];
  }

  return result;
}
