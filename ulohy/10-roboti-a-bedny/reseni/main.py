import sys
import math


def read_int() -> int:
    return int(input())


def read_float() -> float:
    return float(input())


def solve_boxes(b: int, r: int, r2: int) -> int:
    return b * r2 // r


def solve_robots(r: int, t: float, t2: float) -> int:
    return math.ceil(r * t / t2)


if __name__ == "__main__":
    b = read_int()
    r = read_int()
    t = read_float()
    c = read_int()

    result = 0

    if c == 1:
        r2 = read_int()
        result = solve_boxes(b, r, r2)
    elif c == 2:
        t2 = read_float()
        result = solve_robots(r, t, t2)

    print(result)
