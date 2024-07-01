from collections import deque

def last_card():
    N = int(input())
    queue = deque(range(1, N + 1))
    
    while len(queue) > 1:
        queue.popleft()         
        queue.append(queue.popleft())  
    print(queue[0])

last_card()
