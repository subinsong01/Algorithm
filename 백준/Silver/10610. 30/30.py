N = list(map(int, input()))
N.sort(reverse=True)

result = int("".join(map(str, N)))  # 문자열을 정수로 변환

if result % 30 == 0:
    print(result) 
else:
    print(-1)
