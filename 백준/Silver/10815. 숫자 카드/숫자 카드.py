import sys
input = sys.stdin.readline

N = int(input())
num1 = set(map(int, input().split()))

M = int(input().strip())
num2 = list(map(int, input().split()))

result = []
for number in num2:
    if number in num1:
        result.append('1')
    else:
        result.append('0')

print(' '.join(result))
