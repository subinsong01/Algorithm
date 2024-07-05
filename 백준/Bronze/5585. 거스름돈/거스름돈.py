num = int(input()) #내가 지불할 금액 
change = 1000 - num #1000 - 내가 지불할 금액 빼기 

coins = [500, 100, 50, 10, 5, 1]
count = 0 #거스름돈 개수 확인

for coin in coins:
    count += change // coin 
    change %= coin 
    
print(count)