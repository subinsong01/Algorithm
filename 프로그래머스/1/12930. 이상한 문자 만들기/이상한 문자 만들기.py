def solution(s):
    answer = ''
    list = s.lower().split(' ')
    
    for word in list:
        new_word = ''
        for i in range(len(word)):
            if i % 2 == 0:
                new_word = new_word + word[i].upper()
            else:
                new_word = new_word + word[i]
        list[list.index(word)] = new_word
    answer = ' '.join(list)
    return answer