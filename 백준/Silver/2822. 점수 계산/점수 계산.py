scores = []  # 점수 리스트

for i in range(1, 9):
    score = int(input())
    scores.append((score, i))  # 각 문제의 점수와 문제 번호를 튜플로 저장

# 점수가 같은 경우 문제 번호 순으로 정렬하기
scores.sort(reverse=True, key=lambda x: x[0])

total_score = sum(score for score, _ in scores[:5])
included_problems = sorted(problem for _, problem in scores[:5])

print(total_score)
print(' '.join(map(str, included_problems)))
