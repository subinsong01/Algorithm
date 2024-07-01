N = int(input()) #사람 수
times = list(map(int, input().split())) #시간 받기 

times.sort()
total_time = 0
current_time = 0

for time in times:
    current_time += time
    total_time += current_time 
    
print(total_time)