from collections import deque

N, M = map(int, input().split()) 
queue = deque(range(1, N + 1)) 

positions = list(map(int, input().split())) 

cnt = 0  # 이동 횟수

for i in positions:

    target_idx = queue.index(i)
    if target_idx <= len(queue) // 2:
        cnt += target_idx
        queue.rotate(-target_idx) 
    else:
        right_moves = len(queue) - target_idx
        cnt += right_moves
        queue.rotate(right_moves) 
    
    queue.popleft()

print(cnt)
