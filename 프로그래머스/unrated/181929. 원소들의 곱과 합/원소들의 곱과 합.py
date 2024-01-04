def solution(num_list):
    mul = 1
    
    for num in num_list:
        mul *= num
        
    total_sum = sum(num_list)

    return 1 if mul < total_sum ** 2 else 0


