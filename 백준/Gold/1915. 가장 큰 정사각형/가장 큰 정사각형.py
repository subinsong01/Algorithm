import sys
input = sys.stdin.read

data = input().split()
n, m = int(data[0]), int(data[1])
matrix = data[2:n+2]  # n개의 행 데이터 

dp = [[0] * (m + 1) for _ in range(n + 1)]
max_side = 0  # 가장 큰 정사각형 한 변의 길이 저장 변수

for i in range(1, n + 1):
    for j in range(1, m + 1):
        if matrix[i - 1][j - 1] == '1': 
            dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
            max_side = max(max_side, dp[i][j])  # 최대 변의 길이 업데이트

print(max_side ** 2)
