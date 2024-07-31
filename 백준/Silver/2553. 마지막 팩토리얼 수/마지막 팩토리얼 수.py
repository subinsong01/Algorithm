import math

N = int(input())

result = math.factorial(N)

result_str = str(result)
zero_digit = None

for char in reversed(result_str):
    if char != '0':
        zero_digit = char
        break

print(zero_digit)
