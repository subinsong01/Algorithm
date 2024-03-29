def solution(price, money, count):
    total_cost = sum(price * i for i in range(1, count + 1))
    
    return max(total_cost - money, 0)

