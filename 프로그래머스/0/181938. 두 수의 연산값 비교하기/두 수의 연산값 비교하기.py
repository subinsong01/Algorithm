def solution(a, b):
    answer = 0
    
    mul = 2 * a * b
    numstr = int(str(a) + str(b))
    if mul > numstr :
        return mul
    else : 
        return numstr

    return answer