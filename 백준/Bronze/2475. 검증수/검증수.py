nums = list(map(int, input().split()))
numbers_sum = 0

for num in nums:
    numbers_sum += num ** 2

result = numbers_sum % 10

print(result)
