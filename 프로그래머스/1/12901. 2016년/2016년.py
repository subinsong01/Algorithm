import calendar

def solution(a, b):
    day_of_week = calendar.weekday(2016, a, b)
    day_name = calendar.day_name[day_of_week][:3].upper()
    return day_name
