def solution(citations):
    answer = 0
    citations.sort(reverse=True)
    
    for i in range(len(citations)):
        if (citations[i] < i + 1):
            return i #여기서 h가 i를 의미 
        
    return len(citations)
    