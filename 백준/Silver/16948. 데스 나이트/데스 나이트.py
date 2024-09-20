from collections import deque

N = int(input()) 
r1, c1, r2, c2 = map(int, input().split())

board = [[-1 for _ in range(N)] for _ in range(N)] #-1로 초기화 

queue = deque([])
queue.append([r1, c1])
board[r1][c1] = 0 

while board[r2][c2] == -1 and queue:
    r, c = queue.popleft()
    for dx, dy in [[-2, -1], [-2, 1], [0, -2], [0, 2], [2, -1], [2, 1]]:
        if 0 <= r + dx < N and 0 <= c + dy < N and board[r + dx][c + dy] == -1:
            queue.append([r + dx, c + dy])
            board[r + dx][c + dy] = board[r][c] + 1  

print(board[r2][c2])
