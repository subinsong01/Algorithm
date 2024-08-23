def solution(n, computers):
    count = 0
    visited = set() #{}

    def dfs(node):
        visited.add(node)

        for i in range(n):
            if i not in visited and computers[node][i]:
                dfs(i)

    for start in range(n):
        if start not in visited:
            dfs(start)
            count += 1

    return count