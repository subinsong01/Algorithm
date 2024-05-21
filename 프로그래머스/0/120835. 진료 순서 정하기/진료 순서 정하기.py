def solution(emergency):
    temp = sorted(emergency, reverse=True)
    answer = [temp.index(i)+1 for i in emergency]
    return answer 