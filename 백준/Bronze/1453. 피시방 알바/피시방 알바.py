def num(N, seats_num):
    seats = [False] * 101
    reject = 0

    for seat in seats_num:
        if seats[seat]:
            reject += 1
        else:
            seats[seat] = True # 자리 앉음 
    
    return reject

N = int(input())
seat_requests = list(map(int, input().split()))

print(num(N, seat_requests))
