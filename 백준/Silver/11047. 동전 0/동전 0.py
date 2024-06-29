N, K = map(int, input().split())
# N = 준규가 가지고 있는 동전의 수
# K = 만들고자 하는 동전의 합
coins = []
result = 0

# 동전 액면가 입력 받기
for i in range(N):
    coins.append(int(input()))
    
coins.sort(reverse=True)

for j in coins:
    result += K // j
    K = K % j

print(result)
