def solution(n):
    total_sum = 0
    if (n % 2 == 1):
        for i in range(n,0,-2):
            total_sum += i        
    else:
        for i in range(n,0,-2):
            total_sum += (i**2)
            
    return total_sum