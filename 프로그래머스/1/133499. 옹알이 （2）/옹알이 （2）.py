def solution(babbling):
    answer = 0
    able = ["aya", "ye", "woo", "ma"]
    for i in babbling:
        for a in able:
            if a * 2 not in i:
                i = i.replace(a, ' ')
        if i.isspace():
            answer += 1
    return answer