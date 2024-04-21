if __name__ == "__main__":
    number = input()
    decimal_dot_index = number.find('.')

    if decimal_dot_index == -1:
        decimal_dot_index = len(number)

    for i in range(decimal_dot_index):
        multiple = number[i]

        if multiple == '0':
            continue

        print(f"{multiple} x 1", end='')
        for j in range(decimal_dot_index - i - 1):
            print('0', end='')

        print()

    for i in range(decimal_dot_index + 1, len(number)):
        multiple = number[i]

        if multiple == '0':
            continue

        print(f"{multiple} x 0.", end='')
        for j in range(i - decimal_dot_index - 1):
            print('0', end='')

        print('1')
