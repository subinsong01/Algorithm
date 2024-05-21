def solution(array):
    count = 0
    for number in array:
        count += str(number).count('7')
    return count