S = input()
answer = []

for i in range(len(S)):
    answer.append(S[i:])

answer.sort() #정렬

for i in answer:
    print(i)