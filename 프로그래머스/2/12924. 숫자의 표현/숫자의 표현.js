function solution(n) {
    let answer = 0;
    let left = 1, right = 1, sum = 1;

    while (right <= n) {
        if (sum < n) {
            right++;
            sum += right;
        } else if (sum > n) {
            sum -= left;
            left++;
        } else {
            answer++;
            right++;
            sum += right;
        }
    }

    return answer;
}
