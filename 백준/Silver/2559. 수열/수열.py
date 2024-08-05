import sys
input = sys.stdin.readline

N, K = map(int, input().split())
nums = list(map(int, input().split()))

each = sum(nums[:K])
max_value = each

for i in range(K, N):
    each += nums[i] - nums[i-K] 
    max_value = max(max_value, each) 

print(max_value)
