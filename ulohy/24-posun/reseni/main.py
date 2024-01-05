def read_int() -> int:
    return int(input())


if __name__ == "__main__":
    s = read_int()
    n = read_int()
    input()

    numbers = []

    for i in range(n):
        numbers.append(read_int())

    if n > 0:
        s %= n

    numbers_shifted = [0] * n
    for i in range(n):
        new_index = i + s
        if new_index < 0:
            new_index += n
        elif new_index >= n:
            new_index -= n

        numbers_shifted[new_index] = numbers[i]

    for i in range(n):
        print(numbers_shifted[i])
