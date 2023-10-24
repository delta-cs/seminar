if __name__ == "__main__":
    check = input() == "check"
    canMove = input() == "can move"

    if canMove:
        if check:
            result = "check"
        else:
            result = "continuing"
    else:
        if check:
            result = "check"
        else:
            result = "stale"

        result += "mate"

    print(result)