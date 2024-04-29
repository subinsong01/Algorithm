subject = int(input()) # 과목 개수 받기
scores = list(map(int, input().split())) # 점수 입력 받기
M = max(scores)

for i in range(subject):
    scores[i] = scores[i] / M * 100

print(sum(scores) / subject)
