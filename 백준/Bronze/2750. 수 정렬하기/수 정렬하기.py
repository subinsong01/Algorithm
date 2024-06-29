num =int(input())

data = []
for i in range(num):
    data.append(int(input()))

data.sort()
for j in data:
    print(j)