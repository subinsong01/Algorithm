import sys

input = sys.stdin.read
output = sys.stdout.write

data = input().split()
num = int(data[0])#수의 개수 
arr = list(map(int, data[1:num+1])) #리스트로 받아오기 

arr.sort() #정렬 

result = "\n".join(map(str, arr)) + "\n" 
output(result)