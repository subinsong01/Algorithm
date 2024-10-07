def solution(cards1, cards2, goal):
    n, m = 0, 0   
    for i in goal:
        if n < len(cards1) and cards1[n] == i:
            n += 1 
        elif m < len(cards2) and cards2[m] == i:
            m += 1  
        else:
            return "No"
    return "Yes"  
