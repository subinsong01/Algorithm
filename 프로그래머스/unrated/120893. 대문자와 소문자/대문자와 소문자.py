def solution(my_string):
    result = ''.join(char.lower() if char.isupper() else char.upper() for char in my_string)
    return result
