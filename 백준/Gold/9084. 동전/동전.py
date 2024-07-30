for _ in range(int(input())):
    n = int(input())
    coins = list(map(int, input().split()))
    m = int(input())

    table = [0] * (m + 1)
    table[0] = 1

    for i in range(n):
        k = coins[i]
        for j in range(k, m+1):
            table[j] += table[j-k]

    print(table[-1])