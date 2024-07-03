N, L = map(int, input().split())
h = list(map(int, input().split()))
h.sort() #정렬

for i in range(N):
    if h[i] <= L:
        L += 1
    else:
        break

print(L)