def solution(phone_number):
    length = len(phone_number) #핸드폰 번호 길이
    return '*' * (length - 4) + phone_number[-4:]
