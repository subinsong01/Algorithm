function solution(n, k) {
    let filternums = [];
    for(let i = 1; i <= n; i++){
        filternums.push(i)
    }
    return filternums.filter(num => (num % k === 0))
}