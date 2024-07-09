N = int(input())
milk_option = list(map(int, input().split()))
route = 0 #횟수 

for i in range(N):
    if milk_option[i] == route % 3:
        route += 1
    
print(route)