def solution(clothes) :
    answer = 1
    
    clotheslist = {}
    for n, t in clothes :
        if t in clotheslist : 
            clotheslist[t].append(n)
        else:
            clotheslist[t] = [n]
    for t in clotheslist : 
        answer *= len(clotheslist[t])+1
        
    answer-=1
    
    return answer