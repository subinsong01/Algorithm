def solution(numbers, K):
    N = len(numbers)
    position = (2 * (K - 1)) % N

    return numbers[position]
