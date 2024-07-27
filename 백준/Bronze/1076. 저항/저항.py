def answer(color):
    color_map = {
        'black': 0,
        'brown': 1,
        'red': 2,
        'orange': 3,
        'yellow': 4,
        'green': 5,
        'blue': 6,
        'violet': 7,
        'grey': 8,
        'white': 9
    }
    return color_map[color]

def mul(color):
    multiple_map = {
        'black': 1,
        'brown': 10,
        'red': 100,
        'orange': 1000,
        'yellow': 10000,
        'green': 100000,
        'blue': 1000000,
        'violet': 10000000,
        'grey': 100000000,
        'white': 1000000000
    }
    return multiple_map[color]

first = input().strip()
second = input().strip()
third = input().strip()

first_value = answer(first)
second_value = answer(second)
multiplier = mul(third)

colors = (first_value * 10 + second_value) * multiplier

print(colors)
