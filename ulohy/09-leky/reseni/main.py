if __name__ == "__main__":
    hours = int(input())
    minutes = int(input())

    minutesTotal = hours * 60 + minutes

    startWhite = 6 * 60
    endWhite = 21 * 60
    intervalWhite = 3 * 60

    startRed = 8 * 60
    endRed = 22 * 60
    intervalRed = 2 * 60

    startYellow = 12 * 60 + 45
    endYellow = 22 * 60 + 30
    intervalYellow = 45

    takeWhite = False
    takeRed = False
    takeYellow = False

    # Dá se zkrátit na `takeWhite = <podmínka>`.
    if startWhite <= minutesTotal <= endWhite and (minutesTotal - startWhite) % intervalWhite == 0:
        takeWhite = True

    if startRed <= minutesTotal <= endRed and (minutesTotal - startRed) % intervalRed == 0:
        takeRed = True

    if startYellow <= minutesTotal <= endYellow and (minutesTotal - startYellow) % intervalYellow == 0:
        takeYellow = True

    if takeWhite:
        print("white")

    if takeRed:
        print("red")

    if takeYellow:
        print("yellow")
