from collections import deque

N, W, L = map(int, input().split())
#n = 다리를 건너는 트럭의 수 
#w = 다리의 길이
#L = 다리의 최대 하중 

trucks = list(map(int, input().split()))  # 트럭들의 무게, n개를 받음 


bridge = deque([0] * W) 
total_weight = 0 #트럭들의 무게 
time = 0 #시간 

for truck in trucks:
    while True:
        time += 1
        
        total_weight -= bridge.popleft()
        if total_weight + truck <= L:
            bridge.append(truck)
            total_weight += truck
            break
        else:
            bridge.append(0)

time += W
print(time)
