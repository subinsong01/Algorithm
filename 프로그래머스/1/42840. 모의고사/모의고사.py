def solution(answers):
    answer = []
    A = [1, 2, 3, 4, 5]
    B = [2, 1, 2, 3, 2, 4, 2, 5]
    C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    # 각 학생의 정답 맞춘 개수
    score = [0, 0, 0]
    
    # 답안과 패턴 비교
    for i in range(len(answers)):
        if answers[i] == A[i % len(A)]:
            score[0] += 1
        if answers[i] == B[i % len(B)]:
            score[1] += 1
        if answers[i] == C[i % len(C)]:
            score[2] += 1
    
    # 최고 점수 찾기
    max_score = max(score)
    
    # 최고 점수를 받은 사람들
    for i in range(3):
        if score[i] == max_score:
            answer.append(i + 1)  # A, B, C는 각각 1, 2, 3번
    
    return answer