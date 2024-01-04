def solution(num_list):
    even_total = 0
    odd_total = 0
    
    for i in range(0,len(num_list),2):
        even_total += num_list[i]
    
    for i in range(1,len(num_list),2):
        odd_total += num_list[i]
    
    if even_total > odd_total:
        return even_total
    else :
        return odd_total
