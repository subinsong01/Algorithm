N = int(input())
A = list(map(int, input().split()))
A.sort()
B = list(map(int,input().split()))
B.sort(reverse=True)
total_sum = 0

for i in range(len(A)):
    total_sum += A[i] * B[i]
    
print(total_sum)