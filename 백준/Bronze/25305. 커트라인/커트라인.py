N, K = map(int, input().split())
scores = list(map(int, input().split()))

sorted_scores = sorted(scores, reverse=True)#내림차순으로 정렬 
print(sorted_scores[K-1])
