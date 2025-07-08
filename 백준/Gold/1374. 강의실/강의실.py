import sys
import heapq

input = sys.stdin.read
data = input().splitlines()

N = int(data[0])
lectures = []

for line in data[1:]:
    _, start, end = map(int, line.split())
    lectures.append((start, end))

lectures.sort()

heap = []
heapq.heappush(heap, lectures[0][1])

for i in range(1, N):
    start, end = lectures[i]
   
    if heap[0] <= start:
        heapq.heappop(heap)
  
    heapq.heappush(heap, end)
    
print(len(heap))