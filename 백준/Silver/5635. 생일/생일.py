n = int(input())  # 학생 수
students = []

for _ in range(n):
    name, d, m, y = input().split()
    students.append([name, int(d), int(m), int(y)])  # name = 학생 이름

students.sort(key=lambda x: (x[3], x[2], x[1]))  # 년,월,일 순으로 정렬

print(students[-1][0])  # 가장 나이 적은 사람
print(students[0][0])   # 가장 나이 많은 사람
