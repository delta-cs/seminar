import sys

if __name__ == "__main__":
    n = int(input())

    if n < 1:
        sys.exit()

    names = []
    scores = []

    sum_scores = 0

    for _ in range(n):
        input()
        names.append(input())
        scores.append(float(input()))
        sum_scores += scores[-1]

    average = sum_scores / n

    for i in range(n):
        if scores[i] >= average:
            print(names[i])
