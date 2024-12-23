function solution(sequence, k) {
    let left = 0, right = 0;
    let currentSum = 0;
    let answer = [-1, -1];  
    
    while (right < sequence.length) {
        currentSum += sequence[right];
    
        while (currentSum > k && left <= right) {
            currentSum -= sequence[left];
            left++;
        }

        if (currentSum === k) {
            if (answer[0] === -1 || right - left < answer[1] - answer[0]) {
                answer = [left, right];
            }
        }

        right++;
    }
    
    return answer;
}
