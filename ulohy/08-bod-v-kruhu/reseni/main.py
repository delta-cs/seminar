import sys
import math


def read_float() -> float:
    return float(input())


def lies_inside(radius: float, centerX: float, centerY: float, pointX: float, pointY: float) -> bool:
    a = abs(centerX - pointX)
    b = abs(centerY - pointY)
    c = math.sqrt(pow(a, 2) + pow(b, 2))

    return c <= radius


if __name__ == "__main__":
    diameter = read_float()
    centerX = read_float()
    centerY = read_float()
    pointX = read_float()
    pointY = read_float()

    lies_inside = lies_inside(diameter / 2, centerX, centerY, pointX, pointY)

    print("inside" if lies_inside else "outside")
