def solution(arr, divisor):
    answer = [num for num in arr if num % divisor == 0]
    answer.sort()
    if len(answer) == 0:
        return [-1]
    return answer
