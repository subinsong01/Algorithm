import sys

input = sys.stdin.read
data = input().splitlines()

N = int(data[0])  # 사람의 수
tips = []
for i in range(N):
    tip = int(data[i + 1])
    tips.append(tip)

tips.sort(reverse=True)

max_tips = 0
for i in range(N):
    max_tips += max(0, tips[i] - i)

print(max_tips)
