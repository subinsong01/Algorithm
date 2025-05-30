function solution(k, score) {
    const answer = [];
    const a = [];

    for (let i = 0; i < score.length; i++) {
        a.push(score[i]);
        a.sort((a, b) => b - a);

        if (a.length > k) {
            a.pop();
        }

        answer.push(a[a.length - 1]);
    }

    return answer;
}
