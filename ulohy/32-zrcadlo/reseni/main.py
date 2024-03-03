import sys

if __name__ == "__main__":
    w = int(input())
    h = int(input())
    direction = input()
    input()

    if w < 1 or h < 1:
        sys.exit()

    paper = [["" for _ in range(w)] for _ in range(h)]

    for row in range(h):
        for col in range(w):
            paper[row][col] = input()

    if direction == "p":
        for row in range(h):
            for col in reversed(range(w)):
                print(paper[row][col], end="")
            print()
    else:
        for row in reversed(range(h)):
            for col in range(w):
                print(paper[row][col], end="")
            print()
