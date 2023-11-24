import math


def format_float(number) -> str:
    return ("%f" % number).rstrip("0").rstrip(".")


def print_decomposition(number: int) -> None:
    size = 0
    temp = number
    while temp >= 10:
        temp //= 10
        size += 1

    while number > 0:
        power = math.pow(10, size)
        multiple = number // power

        if multiple != 0:
            print(f"{format_float(multiple)} x {format_float(power)}")

        # Neboli `number = number % power`.
        number %= power
        size -= 1


if __name__ == "__main__":
    number = int(input())

    print_decomposition(number)
