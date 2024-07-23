A, B, N = map(int, input().split())

remainder = A % B

for _ in range(N):
    remainder *= 10
    digit = remainder // B
    remainder %= B

print(digit)
