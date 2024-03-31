def solution(t, p):
    answer = 0
    p_length = len(p)  # p의 길이

    for i in range(len(t) - p_length + 1):
        sub_str = t[i:i+p_length]  # t에서 길이가 p와 같은 부분 문자열 추출
        if int(sub_str) <= int(p):  # 부분 문자열을 정수로 변환하여 p와 비교
            answer += 1

    return answer
