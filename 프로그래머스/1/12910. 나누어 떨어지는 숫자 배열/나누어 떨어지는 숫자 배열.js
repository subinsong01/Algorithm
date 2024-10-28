function solution(arr, divisor) {
    var answer = [];
    
    // arr 배열을 순회하며 divisor로 나누어 떨어지는 값을 answer 배열에 추가
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }
    
    if (answer.length === 0) {
        return [-1];
    } else {
        answer.sort((a, b) => a - b);
        return answer;
    }
}