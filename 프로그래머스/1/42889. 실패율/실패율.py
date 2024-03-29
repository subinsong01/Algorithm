def solution(N, stages):
    #실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수 
    #N = 전체 스테이지 개수, stages = 게임을 이용하는 사용자가 현재 멈춰 있는 스테이지의 번호가 담긴          배열 
    fail_list = {}
    reachPeople = len(stages)
    
    for i in range(1, N+1):
        if reachPeople != 0:
            fail_list[i]  = stages.count(i) / reachPeople
            reachPeople -= stages.count(i)
        else : 
            fail_list[i] = 0
            
    return sorted(fail_list, key = lambda i : fail_list[i], reverse=True)
