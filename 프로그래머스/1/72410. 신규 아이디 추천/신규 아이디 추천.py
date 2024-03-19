def solution(new_id):
    answer = ''
    new_id = new_id.lower() #1단계 
    
    for id in new_id:
        if id.isalpha() or id.isdigit() or id in '-_.':
            answer += id #2단계 
            
    while '..' in answer:
        answer = answer.replace('..', '.') #3단계
        
    if answer[0:1] == '.':
        answer = answer[1:]
    if answer[-1:0] == '.':
        answer = answer[:-1] #4단계 
    
    if answer == "":
        answer = 'a' #5단계
    
    answer = answer[:15]
    if answer[-1] == '.':
        answer = answer[:-1]
    print(answer)
    
    while len(answer) < 3:
        answer += answer[-1]
        
    return answer
    
        
        
            
        
    
    
    
    return answer