#전체학생 = n , 체육복을 도난당한 학생들의 번호가 담긴 배열 = lost
#여벌의 체육복을 가져온 학생 수 배열 = reverse

def solution(n, lost, reserve):
    
    s = set(lost) & set(reserve)
    l = set(lost) - s
    r = set(reserve) - s
    
    for k in sorted(r):
        if (k - 1) in l:
            l.remove(k - 1)
        elif (k + 1) in l:
            l.remove(k + 1)
    
    return n - len(l)