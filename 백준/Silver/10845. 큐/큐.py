import sys
from collections import deque

n = int(sys.stdin.readline())
queue = deque()

def solution(command):
    global queue
    if command[0] == 'push':
        queue.append(int(command[1]))
    elif command[0] == 'pop':
        if queue:
            return queue.popleft()
        else:
            return -1
    elif command[0] == 'size':
        return len(queue)
    elif command[0] == 'empty':
        if queue:
            return 0
        else:
            return 1
    elif command[0] == 'front':
        if queue:
            return queue[0]
        else:
            return -1
    elif command[0] == 'back':
        if queue:
            return queue[-1]
        else:
            return -1

for _ in range(n):
    command = sys.stdin.readline().split()
    result = solution(command)
    if result is not None:
        print(result)
