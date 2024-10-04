arrA = []
for i in range(5):
    arrA.append(list(map(int, input().split())))

arrB = []
for j in range(5):
    arrB.append(list(map(int, input().split())))

def check_bingo(board):
    bingo_count = 0 #bingo 횟수
    
    # 가로
    for row in board:
        if all(num == 0 for num in row):
            bingo_count += 1
    
    # 세로
    for col in range(5):
        if all(board[row][col] == 0 for row in range(5)):
            bingo_count += 1
    
    # 대각선
    if all(board[i][i] == 0 for i in range(5)):
        bingo_count += 1
    if all(board[i][4-i] == 0 for i in range(5)):
        bingo_count += 1
    
    return bingo_count

cnt = 0 #사회자가 부른 숫자 횟수 
found_bingo = False

for row in arrB:
    for num in row:
        cnt += 1
        
        for i in range(5):
            for j in range(5):
                if arrA[i][j] == num:
                    arrA[i][j] = 0  
        
        if check_bingo(arrA) >= 3: 
            found_bingo = True
            break
    if found_bingo:
        break

print(cnt)
