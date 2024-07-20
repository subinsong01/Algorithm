import sys
input = sys.stdin.read

X, Y = map(int, input().split())
diff_height = Y - X

if diff_height == 0:
    print(0)
elif diff_height == 1:
    print(1)
elif diff_height == 2:
    print(2)
else:
    for i in range(1, 100000):
        if i * (i + 1) < diff_height <= i * (i + 1) + (i + 1):
            print(i * 2 + 1)
            break
        if i * (i + 1) + (i + 1) < diff_height <= (i + 1) * (i + 2):
            print(i * 2 + 2)
            break
