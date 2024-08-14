N = int(input())
num1 = list(map(int, input().split()))
M = int(input())
num2 = list(map(int, input().split()))

li = set(num1) #중복 제거
ans = [ ]

for i in num2:
    if i in li:
        ans.append(1)
    else:
        ans.append(0)
        
for answer in ans:
    print(answer)
