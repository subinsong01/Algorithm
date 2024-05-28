import math 

def solution(balls, share):

    up = math.factorial(balls)
    down =  math.factorial(balls - share) * math.factorial(share) 
    
    answer = up / down
    return answer