N = int(input())
numbers = list(map(int, input().split()))
operators = list(map(int, input().split()))

# Global variables to store min and max results
Min = float('inf')
Max = float('-inf')

def calculate(current_index, current_result):
    global Min, Max
    
    # If we've used all numbers, update Min and Max
    if current_index == N:
        Min = min(Min, current_result)
        Max = max(Max, current_result)
        return
    
    # Try all operations (+, -, *, //) if they are available
    if operators[0] > 0:  # +
        operators[0] -= 1
        calculate(current_index + 1, current_result + numbers[current_index])
        operators[0] += 1
    
    if operators[1] > 0:  # -
        operators[1] -= 1
        calculate(current_index + 1, current_result - numbers[current_index])
        operators[1] += 1
    
    if operators[2] > 0:  # *
        operators[2] -= 1
        calculate(current_index + 1, current_result * numbers[current_index])
        operators[2] += 1
    
    if operators[3] > 0:  # //
        operators[3] -= 1
        if current_result < 0:
            calculate(current_index + 1, -(-current_result // numbers[current_index]))
        else:
            calculate(current_index + 1, current_result // numbers[current_index])
        operators[3] += 1

# Start calculating from the first number with initial result as the first number
calculate(1, numbers[0])

# Output the results
print(Max)
print(Min)
