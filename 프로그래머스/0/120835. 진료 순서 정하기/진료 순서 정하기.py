def solution(emergency):
    answer = []
    temp = sorted(emergency, reverse=True)
    for i in emergency:
        index = temp.index(i) + 1
        answer.append(index)
  
    return answer 