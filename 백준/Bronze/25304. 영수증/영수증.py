price = int(input()) #총 금액 
product = int(input()) #구매한 물건의 종류의 수

sum = 0

for i in range(product):
    prices, cnt = map(int, input().split());
    sum += (prices * cnt)

if price == sum:
    print('Yes')
else :
    print('No')
