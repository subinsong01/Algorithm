N, M, K = map(int, input().split())

if N < 2 or M < 1:
    print(0)
    
if N + M <= K:
    print(0)
    
team = 0
    
while (N - 2) + (M -1) >= K:
    if N >= 2 and M >= 1:
        N -= 2
        M -= 1
        team += 1
    else:
        break

print(team)