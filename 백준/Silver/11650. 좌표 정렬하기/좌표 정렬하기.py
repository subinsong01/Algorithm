import sys
input = sys.stdin.readline

num = int(input());
arr = [list(map(int, input().split(' '))) for _ in range(num)]
arr = sorted(arr, key=lambda x:(x[0], x[1]))

for x, y in arr:
    print(x, y)