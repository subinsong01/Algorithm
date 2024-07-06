from collections import defaultdict, deque

# 그래프를 인접 리스트로 표현
graph = defaultdict(list)

# 입력 받기
N, M, V = map(int, input().split())
for _ in range(M):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

# 각 정점의 인접 리스트를 정렬 (정점 번호가 작은 것을 먼저 방문하기 위해)
for key in graph:
    graph[key].sort()

def dfs(graph, start):
    visited = []
    stack = [start]
    
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.append(node)
            # 방문할 수 있는 정점이 여러 개인 경우, 정점 번호가 작은 것을 먼저 방문하기 위해 정렬
            stack.extend(sorted(graph[node], reverse=True))
    return visited

def bfs(graph, start):
    visited = []
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        if node not in visited:
            visited.append(node)
            # 방문할 수 있는 정점이 여러 개인 경우, 정점 번호가 작은 것을 먼저 방문하기 위해 정렬
            queue.extend(sorted(graph[node]))
    return visited

# DFS와 BFS 수행
dfs_result = dfs(graph, V)
bfs_result = bfs(graph, V)

# 결과 출력
print(' '.join(map(str, dfs_result)))
print(' '.join(map(str, bfs_result)))
