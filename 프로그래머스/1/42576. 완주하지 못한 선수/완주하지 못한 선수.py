def solution(participant, completion):
    #마라톤에 참여한 선수들의 이름이 담긴 배열 = participant
    #완주한 사람들의 이름이 담긴 배열 = completion
    hash_dict = {}
    sumHash = 0
    for i in participant:
        hash_dict[hash(i)] = i
        sumHash += hash(i)
        
    for j in completion:
        sumHash -= hash(j)
    
    return hash_dict[sumHash]
        