import sys
input = sys.stdin.readline
from collections import deque

move = [[0, -1], [0, 1], [-1, 0], [1, 0]]
r, c = map(int, input().split())

g = []
v = [[False] * c for i in range(r)]

for i in range(r) :
    g.append(list(map(str, input().strip())))


def _3187(x, y, value) :
    q = deque()
    q.append((x, y))
    v[x][y] = True

    temp_wolf , temp_sheep = 0, 0
    if value == "v" :
        temp_wolf = 1
    if value == "k":
        temp_sheep = 1

    while q :
        x, y = q.popleft()

        for i in range(len(move)) :
            nx, ny = move[i][0] + x, move[i][1] + y

            if nx < 0 or nx >= r or ny < 0 or ny >= c :
                continue

            if not v[nx][ny] and g[nx][ny] != "#":
                if g[nx][ny] == "v" :
                    temp_wolf += 1
                if g[nx][ny] == "k" :
                    temp_sheep += 1

                v[nx][ny] = True
                q.append((nx,ny))

    return temp_wolf, temp_sheep


wolf, sheep = 0, 0

for i in range(r) :
    for j in range(c) :
        if (g[i][j] == "v" or g[i][j] == "k") and not v[i][j] :
            temp_list = _3187(i,j,g[i][j])

            # 늑대가 더 많으면
            if temp_list[0] >= temp_list[1] :
                wolf += temp_list[0]
            else :
                sheep += temp_list[1]

print(sheep, wolf)