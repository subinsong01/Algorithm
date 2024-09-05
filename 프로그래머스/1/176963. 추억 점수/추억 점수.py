def solution(name, yearning, photo):
    answer = []
    
    for i in photo:
        sum = 0
        for j in range(len(i)):
            if i[j] in name:
                index = name.index(i[j])
                sum += yearning[index]
        answer.append(sum)
        
    return answer 