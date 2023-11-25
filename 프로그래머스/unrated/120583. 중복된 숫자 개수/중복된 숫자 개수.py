def solution(array, n):
    count = 0
    for element in array:
        if element == n:
            count += 1
    return count


