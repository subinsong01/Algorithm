S = input()
num = S[0] #현재 기준 숫자 
cnt = 0

for i in S[1:]:
    if i == num:
        continue
    else:
        cnt += 1
        num = i

if cnt % 2 == 0:
    print(cnt//2)
else:
    print(cnt//2+1)