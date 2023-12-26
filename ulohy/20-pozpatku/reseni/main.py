if __name__ == "__main__":
    n = int(input())
    input()

    numbers = []

    for _ in range(n):
        numbers.append(int(input()))

    for i in range(n - 1, -1, -1):
        print(numbers[i])
