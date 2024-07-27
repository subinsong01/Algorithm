A = int(input())
B = int(input())
C = int(input())

multiple_nums = A * B * C

nums_str = str(multiple_nums) #문자열로 변환

digit = [0] * 10 #리스트 초기화

for char in nums_str:
    digit[int(char)] += 1

for count in digit:
    print(count)