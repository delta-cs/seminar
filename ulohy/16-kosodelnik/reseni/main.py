def print_rhomboid(side, height):
    for i in range(height):
        for j in range(height - i - 1):
            print(" ", end="")

        for j in range(side):
            output = " " if (i > 0 and i < height - 1 and j > 0 and j < side - 1) else "#"
            print(output, end="")

        print()


if __name__ == "__main__":
    side = int(input())
    height = int(input())

    print_rhomboid(side, height)
