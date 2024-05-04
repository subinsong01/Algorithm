import heapq

def solution(scoville, K):
    heapq.heapify(scoville)  # scoville 리스트를 최소 힙으로 변환합니다.
    answer = 0
    
    while scoville[0] < K:  # scoville 리스트의 최솟값이 K보다 작은 동안 반복합니다.
        if len(scoville) < 2:  # 만약 음식이 하나밖에 없고, 그 값이 K보다 작다면 더 이상 섞을 수 없습니다.
            return -1
        # 가장 맵지 않은 음식의 스코빌 지수와 그 다음으로 맵지 않은 음식의 스코빌 지수를 가져옵니다.
        min1 = heapq.heappop(scoville)
        min2 = heapq.heappop(scoville)
        # 섞은 음식의 스코빌 지수를 계산하여 최소 힙에 추가합니다.
        mixed_scoville = min1 + (min2 * 2)
        heapq.heappush(scoville, mixed_scoville)
        answer += 1  # 섞은 횟수를 증가시킵니다.
    
    return answer
