def solution(nums):

    max_poketmon = len(nums) // 2  
    unique_poketmon = len(set(nums))  
    answer = min(max_poketmon, unique_poketmon)  
    
    return answer
