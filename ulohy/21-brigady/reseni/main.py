def read_int() -> int:
    return int(input())


if __name__ == "__main__":
    m = read_int()
    input()

    hours_worked = []
    for i in range(m):
        hours_worked.append(read_int())

    input()

    salary = 0
    for i in range(m):
        hourly_rate = read_int()
        salary += hours_worked[i] * hourly_rate

    print(salary)
