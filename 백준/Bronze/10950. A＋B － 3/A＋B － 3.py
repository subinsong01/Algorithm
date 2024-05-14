def solution():
    T = int(input())  # 테스트 케이스의 개수 T를 입력받음
    for _ in range(T):
        A, B = map(int, input().split())  # A와 B를 입력받음
        print(A + B)  # A와 B의 합을 출력

solution()
