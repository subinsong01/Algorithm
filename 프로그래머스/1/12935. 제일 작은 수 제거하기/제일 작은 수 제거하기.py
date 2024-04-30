def solution(arr):
    if len(arr) == 1:
        return [-1] 
    
    answer = arr[:]  # arr을 복사하여 answer에 할당합니다.
    answer.remove(min(arr))  # answer에서 최솟값을 제거합니다.
    
    return answer