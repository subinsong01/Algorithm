def solution(nums):
    #nums : 포켓몬의 종류 번호가 담긴 1차원 배열
    answer = len(set(nums)) #set 중복제거 
    if answer > len(nums)/2:
        return len(nums)/2
    return answer