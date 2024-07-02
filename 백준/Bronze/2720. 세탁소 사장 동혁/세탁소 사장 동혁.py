T = int(input()) #테스트 케이스 수 
for i in range(T):
    coin = int(input()) #동전 
    Quarter = coin // 25
    Dime = (coin - Quarter*25) // 10 
    Nickel = (coin - Quarter*25 - Dime*10) // 5
    Penny = coin - Quarter*25 - Dime*10 - Nickel*5
    print(Quarter, Dime, Nickel, Penny)