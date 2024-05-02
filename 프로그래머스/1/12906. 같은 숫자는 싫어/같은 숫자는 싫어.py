def solution(arr):
    answer = []
    
    for i in range(len(arr)):
        if i == 0: #첫 번째 요소 담기 
            answer.append(arr[i])
        elif arr[i] != arr[i-1]:
            answer.append(arr[i])   
    
    return answer