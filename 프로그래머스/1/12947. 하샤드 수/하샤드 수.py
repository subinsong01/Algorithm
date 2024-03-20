def solution(x):
    answer = True
    x_all = 0 #각 자릿수를 더한 값 
    x_indivi = str(x) #x를 문자열로 반환 
    for i in x_indivi:
        x_all += int(i)
        
    if x % x_all:
        answer = False
    
    return answer 
    