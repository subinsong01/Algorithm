from collections import Counter

def solution(array):
    counts = Counter(array)  # 각 요소의 개수를 세기 위해 Counter를 사용합니다.
    max_count = max(counts.values())  # 가장 큰 개수를 찾습니다.
    
    mode = [num for num, count in counts.items() if count == max_count]  # 최빈값들을 찾습니다.
    
    if len(mode) > 1:  # 최빈값이 여러 개인 경우
        return -1
    else:
        return mode[0]  # 최빈값이 하나인 경우 그 값을 반환합니다.
