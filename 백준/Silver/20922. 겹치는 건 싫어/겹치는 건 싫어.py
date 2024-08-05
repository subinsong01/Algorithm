import sys
input = sys.stdin.readline

N, K = map(int, input().split()) #K가 기준 
each = list(map(int, input().split()))

left, right = 0, 0
answer = 0

cnt = [0] * (max(each)+1)

while right < N:
    if cnt[each[right]] < K:
        cnt[each[right]] += 1
        right += 1
    else:
        cnt[each[left]] -= 1
        left += 1
    answer = max(answer, right-left)

print(answer)