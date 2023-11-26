def solution(my_string):
    vowels = "aeiouAEIOU"
    result = ''.join(char for char in my_string if char not in vowels)
    return result
