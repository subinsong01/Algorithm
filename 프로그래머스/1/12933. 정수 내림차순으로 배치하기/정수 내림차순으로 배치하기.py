def solution(n):
    answer = sorted(str(n), reverse=True)
    answer = int(''.join(answer))
    return answer