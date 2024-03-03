import sys

if __name__ == "__main__":
    w = int(input())
    h = int(input())
    input()

    if w < 1 or h < 1:
        sys.exit()

    table = [["" for _ in range(w)] for _ in range(h)]

    for row in range(h):
        for col in range(w):
            table[row][col] = input()

    for col in range(w):
        for row in range(h):
            print(table[row][col], end="")

        print()
