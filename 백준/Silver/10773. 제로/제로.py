K = int(input()) #받을 수 있는 총 숫자의 개수 

num = [ ] 

for _ in range(K):
    n = int(input())
    if n == 0:
        num.pop()
    else:
        num.append(n)
    
total_num = sum(num)
print(total_num)