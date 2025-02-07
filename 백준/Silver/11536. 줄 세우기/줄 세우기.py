n = int(input())
names = [input().strip() for _ in range(n)]

sorted_names = sorted(names)

reverse_sorted_names = sorted(names, reverse=True)

if names == sorted_names:
    print("INCREASING")
elif names == reverse_sorted_names:
    print("DECREASING")
else:
    print("NEITHER")