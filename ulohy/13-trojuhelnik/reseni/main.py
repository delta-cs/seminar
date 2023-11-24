if __name__ == "__main__":
    a = int(input())

    for i in range(a):
        for j in range(i + 1):
            print("#", end="")
        print()
