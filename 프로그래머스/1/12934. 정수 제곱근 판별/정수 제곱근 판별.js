function solution(n) {
    var answer = 0;
    
    if (Number.isInteger(Math.sqrt(n))) {
        answer = Math.pow(Math.sqrt(n) + 1, 2);
    } else {
        return -1;
    }
    
    return answer;
}
