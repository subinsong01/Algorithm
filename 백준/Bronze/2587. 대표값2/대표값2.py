num = [ ]
for i in range(5):
    num.append(int(input()))
    
num.sort() 
total_num = sum(num) / 5
print(int(total_num))
print(num[2])