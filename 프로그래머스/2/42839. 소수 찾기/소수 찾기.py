from itertools import permutations

def is_prime(n):
    if n < 2:
        return False
    if n == 2:  
        return True
    if n % 2 == 0:  
        return False
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    return True

def solution(numbers):
    prime_set = set()

    for i in range(1, len(numbers) + 1):
        perms = permutations(numbers, i)  
        for perm in perms:
            num = int(''.join(perm)) 
            if is_prime(num): 
                prime_set.add(num)  
    
    return len(prime_set)


