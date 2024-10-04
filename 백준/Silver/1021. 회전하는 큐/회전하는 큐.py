from collections import deque

N, M = map(int, input().split()) 
queue = deque(range(1, N + 1)) 

positions = list(map(int, input().split())) 

cnt = 0  # 이동 횟수

for i in positions:

    target = queue.index(i)
    if target <= len(queue) // 2:
        cnt += target
        queue.rotate(-target) 
    else:
        right_moves = len(queue) - target
        cnt += right_moves
        queue.rotate(right_moves) 
    
    queue.popleft()

print(cnt)