function solution(n) {
    let count = 0;
    for (let a = 1; a <= n; a++) {
        if (n % a === 0) {
            count++;
        }
    }
    return count;
}
