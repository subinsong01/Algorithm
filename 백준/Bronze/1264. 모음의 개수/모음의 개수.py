import sys

vowels = "aeiouAEIOU"

while True:
    line = sys.stdin.readline().strip()
    if line == '#':
        break
    
    ans = 0
    for char in line:
        if char in vowels:
            ans += 1
    
    print(ans)
