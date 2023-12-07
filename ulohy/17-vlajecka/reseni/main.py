def print_flag(pole_length, flag_width, height_above_ground):
    flag_height = flag_width * 2 - 1

    if flag_height + height_above_ground > pole_length:
        print("invalid")
        return

    for i in range(pole_length - flag_height - height_above_ground):
        print("|")

    for i in range(1, flag_width + 1):
        for j in range(1, i + 1):
            print("#", end="")
        print()

    for i in range(flag_width - 1, 0, -1):
        for j in range(1, i + 1):
            print("#", end="")
        print()

    for i in range(height_above_ground):
        print("|")


def read_int():
    return int(input())


if __name__ == "__main__":
    p = read_int()
    f = read_int()
    h = read_int()

    print_flag(p, f, h)
