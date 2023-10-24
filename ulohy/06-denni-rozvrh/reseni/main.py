if __name__ == "__main__":
    hours = int(input())
    minutes = int(input())

    minutesTotal = hours * 60 + minutes

    activity = "none"

    if minutesTotal < 6 * 60 or minutesTotal >= 21 * 60:
        activity = "sleep"
    elif minutesTotal < 7 * 60:
        activity = "breakfast"
    elif minutesTotal < 9 * 60 + 15:
        if minutesTotal >= 7 * 60 + 30:
            activity = "programming"
    elif minutesTotal < 11 * 60 + 30:
        activity = "cycling"
    elif minutesTotal < 12 * 60 + 20:
        if minutesTotal >= 11 * 60 + 45:
            activity = "lunch"
    elif minutesTotal < 13 * 60 + 5:
        activity = "listening to music"
    elif minutesTotal < 14 * 60 + 35:
        activity = "school club"
    elif minutesTotal < 16 * 60 + 40:
        activity = "programming"
    elif minutesTotal < 18 * 60 + 45:
        if minutesTotal >= 18 * 60 + 5:
            activity = "dinner"
    elif minutesTotal < 19 * 60 + 10:
        activity = "watching TV"
    elif minutesTotal < 19 * 60 + 25:
        activity = "shower"
    elif minutesTotal >= 19 * 60 + 35:
        activity = "reading"

    print(activity)
