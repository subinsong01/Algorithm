def solution(phone_book):
    #phone_book : 전화번호를 담은 배열 
    #접두어인 경우가 있으면 False<-> 아닌 경우 True 
    answer = True #기본이 true 
    hash_map = {} 
    #해결방법 : 만약 1번에서 2번이나 3번을 뺏을 때, 변화가 있다면 false이고 없다면 true 
    for phone_number in phone_book:
        hash_map[phone_number] = 1
        
    for phone_number in phone_book:
        prefix=""
        for digit in phone_number:
            prefix += digit
            if prefix in hash_map and prefix != phone_number:
                return False
    
    return answer