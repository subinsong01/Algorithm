def solution(array, height):
    count = sum(1 for h in array if h > height)
    return count;
