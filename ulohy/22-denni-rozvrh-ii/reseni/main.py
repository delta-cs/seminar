def read_int():
    return int(input())


def read_time():
    hours = read_int()
    minutes = read_int()
    return hours * 60 + minutes


if __name__ == "__main__":
    n = read_int()
    input();

    activity_names = []
    activity_start_times = []
    activity_end_times = []

    for _ in range(n):
        activity_names.append(input())
        activity_start_times.append(read_time())
        activity_end_times.append(read_time())
        input()

    current_time = read_time()

    activity_found = False
    for i in range(n):
        start_time = activity_start_times[i]
        end_time = activity_end_times[i]

        if (start_time <= current_time <= end_time) \
                or (start_time > end_time and (current_time >= start_time or current_time <= end_time)):
            activity_found = True
            print(activity_names[i])
            break

    if not activity_found:
        print("none")
