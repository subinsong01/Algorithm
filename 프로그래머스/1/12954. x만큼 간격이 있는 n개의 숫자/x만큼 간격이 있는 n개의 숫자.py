def solution(x, n):
    answer = []
    nums = 1 
    
    for i in range(1,n+1):
        answer.append(i*x)
        
    return answer