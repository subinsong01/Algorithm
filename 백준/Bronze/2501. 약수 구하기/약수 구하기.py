import sys
input = sys.stdin.read

data = input().split()
N = int(data[0])
K = int(data[1])

divisors = []
for i in range(1, N+1):
    if N % i == 0:
        divisors.append(i) #약수들 append 해주기

if K <= len(divisors):
    print(divisors[K-1])
else:
    print(0) 
