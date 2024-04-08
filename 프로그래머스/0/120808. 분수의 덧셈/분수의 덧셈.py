import math

def solution(numer1, denom1, numer2, denom2):
    bonja = (numer1 * denom2) + (numer2 * denom1)
    boonmo = (denom1 * denom2)
    yakbun = math.gcd(bonja,boonmo)
    if yakbun == 1:
        answer = [bonja, boonmo]
    else:
        answer = [bonja/yakbun, boonmo/yakbun]
    
    
    
    return answer