def read_int():
    return int(input())


if __name__ == "__main__":
    w = read_int()
    h = read_int()
    n = read_int()
    input()

    grid = [[False for _ in range(h)] for _ in range(w)]

    for i in range(n):
        x = read_int()
        y = read_int()
        a = read_int()
        b = read_int()
        input()

        for col in range(x - 1, x + a - 1):
            for row in range(y - 1, y + b - 1):
                grid[col][row] = True

    for row in range(h):
        for col in range(w):
            print('#' if grid[col][row] else '.', end='')

        print()
