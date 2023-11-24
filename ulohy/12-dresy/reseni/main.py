if __name__ == "__main__":
    n = int(input())
    input()

    countEven = 0
    countOdd = 0

    for i in range(n):
        number = int(input())

        if number % 2 == 0:
            countEven += 1
        else:
            countOdd += 1

    output = "equal"
    if countEven > countOdd:
        output = "even"
    elif countEven < countOdd:
        output = "odd"

    print(output)
