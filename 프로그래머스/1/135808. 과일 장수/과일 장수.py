def solution(k, m, score):
    score.sort(reverse=True)
    answer = 0

    for i in range(0, len(score), m):
        if i + m <= len(score):
            box = score[i:i + m]
            least_score = box[-1]
            answer += least_score * m
    
    return answer