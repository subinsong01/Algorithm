def solution(numbers, direction):
    if not numbers:
        return numbers

    if direction == 'right':
        result = [numbers[-1]] + numbers[:-1]    
    elif direction == 'left':
        result = numbers[1:] + [numbers[0]]
        
    return result 