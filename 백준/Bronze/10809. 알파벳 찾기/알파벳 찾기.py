S = input().strip()  
alphabet = 'abcdefghijklmnopqrstuvwxyz'  

positions = [-1] * 26  # 모든 알파벳의 위치를 -1로 초기화

for index, char in enumerate(S):
    pos = ord(char) - ord('a')  # 현재 문자의 알파벳 인덱스를 계산
    if positions[pos] == -1:  
        positions[pos] = index #현재 위치 

print(' '.join(map(str, positions)))