def solution(left, right):
    answer = 0
    for i in range(left, right+1):
        cnt = 0;			
        for j in range(1, i+1):	#j는 약수를 찾기 위함 
            if i % j == 0:	
            #i는 left부터 right까지의 수.. 그러므로 i % j를 해주면 약수를 찾을 수 있다
                cnt += 1;	
        
        if cnt % 2 == 0:		
            answer += i			
        else:
            answer -= i			
            
    return answer	