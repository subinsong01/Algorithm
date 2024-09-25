numbers = [n*(n+1)//2 for n in range(1, 46)]
arr = [0] * 1001

for i in numbers:
    for j in numbers:
        for k in numbers:
            if i+j+k <= 1000:
                arr[i+j+k] = 1

n = int(input())
for _ in range(n):
    print(arr[int(input())])