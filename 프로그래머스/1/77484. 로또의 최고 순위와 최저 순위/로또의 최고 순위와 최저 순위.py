def solution(lottos, win_nums):
    cnt_corr = 0 # 당첨 가능한 최저 개수
    cnt_zero = 0 # 알아볼 수 없는 번호
    for i in range(len(lottos)):
        if lottos[i] in win_nums:
            cnt_corr += 1
        if lottos[i] == 0:
            cnt_zero += 1
            
    total = cnt_corr + cnt_zero # 당첨 가능한 최고 개수

    rank = {6:1,5:2,4:3,3:4,2:5,1:6,0:6} # 순위와 당첨 내용 딕셔너리
 
    answer = [rank[total],rank[cnt_corr]]
    
    return answer