if __name__ == "__main__":
    mark = int(input())
    attendedContests = input() == "attended"
    absencePercentage = float(input())
    isPolite = input() == "polite"

    # Dá se zkrátit na `passed = <podmínka>`.
    passed = False
    if mark < 5 and (absencePercentage <= 20 or attendedContests or (mark == 1 and isPolite)):
        passed = True

    # Použití ternárního operátoru.
    print("passed" if passed else "failed")
