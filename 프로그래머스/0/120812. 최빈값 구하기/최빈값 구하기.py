def solution(array):

    while len(array) != 0:
        for i, a in enumerate(set(array)):  
            #set(집합)은 중복값을 무시하고, 원소의 종류를 오름차순 정렬해준다.
            array.remove(a)
        if i == 0:
            return a
    return -1