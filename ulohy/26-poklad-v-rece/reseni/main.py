def read_int():
    return int(input())


def sort_by_distance(city_names, city_locations, chest_location):
    swapped = True

    while swapped:
        swapped = False

        for i in range(len(city_locations) - 1):
            distance1 = abs(chest_location - city_locations[i])
            distance2 = abs(chest_location - city_locations[i + 1])

            if distance1 < distance2 or (distance1 == distance2 and city_locations[i] < city_locations[i + 1]):
                continue

            temp = city_locations[i]
            city_locations[i] = city_locations[i + 1]
            city_locations[i + 1] = temp

            temp = city_names[i]
            city_names[i] = city_names[i + 1]
            city_names[i + 1] = temp

            swapped = True


if __name__ == "__main__":
    n = read_int()
    input()

    city_names = []
    city_locations = []

    for _ in range(n):
        city_names.append(input())
        city_locations.append(read_int())

    input()

    chest_location = read_int()

    sort_by_distance(city_names, city_locations, chest_location)

    for city_name in city_names:
        print(city_name)

