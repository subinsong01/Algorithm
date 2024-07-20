import sys
input = sys.stdin.read

data = input().split()
N = int(data[0])
M = int(data[1])

password_dict = {}

index = 2
for _ in range(N):
    site = data[index]
    password = data[index + 1]
    password_dict[site] = password
    index += 2

output = []
for _ in range(M):
    site = data[index]
    output.append(password_dict[site])
    index += 1

sys.stdout.write('\n'.join(output) + '\n')
