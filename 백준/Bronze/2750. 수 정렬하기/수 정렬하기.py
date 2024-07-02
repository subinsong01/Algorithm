num =int(input())

data = []
for i in range(num):
    data.append(int(input()))

data.sort()
for i in data:
    print(i)