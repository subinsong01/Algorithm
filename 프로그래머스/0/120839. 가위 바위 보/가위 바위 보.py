def solution(rsp):
    # 각 경우에 대한 승리 조건을 딕셔너리로 정의합니다.
    win_dict = {'2': '0', '0': '5', '5': '2'}
    
    # 주어진 rsp 문자열의 각 문자를 변환하여 새로운 문자열을 만듭니다.
    result = ''.join(win_dict[char] for char in rsp)
    
    return result
