N = int(input())  
num1 = list(map(int, input().split()))

num1_set = set(num1)

M = int(input())  
num2 = list(map(int, input().split())) 

result = []

for m in num2:
    if m in num1_set:
        result.append(1)
    else:
        result.append(0)

for res in result:
    print(res)
