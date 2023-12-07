def print_multiplication_table(rows, cols):
    table_width = 1
    for col in range(1, cols + 1):
        table_width += count_digits(col * rows) + 3

    print_horizontal_line(table_width)

    for row in range(1, rows + 1):
        print("|", end="")

        for col in range(1, cols + 1):
            result = row * col

            column_width = count_digits(col * rows)
            for pad in range(column_width - count_digits(result) + 1):
                print(" ", end="")

            print(result, end=" ")
            print("|", end="")

        print()
        print_horizontal_line(table_width)

def count_digits(number):
    count = 0
    while number > 0:
        number //= 10
        count += 1
    return count


def print_horizontal_line(width):
    for i in range(width):
        print("-", end="")
    print()


if __name__ == "__main__":
    cols = int(input())
    rows = int(input())

    print_multiplication_table(rows, cols)
