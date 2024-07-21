import sys
input = sys.stdin.readline

def dfs(num):
    for i in graph[num]:
        if visited[i] == 0:  # 방문하지 않았을 때
            visited[i] = 1  # 방문 체크
            dfs(i) 
            
n = int(input())
graph = [[] for i in range(n)]

for i in range(n):
    nums = list(map(int, input().rstrip().split()))
    for j in range(n):
        if nums[j] == 1: 
            graph[i].append(j) 

for i in range(n):
    visited = [0 for _ in range(n)]  
    dfs(i) 
    print(*visited)  
