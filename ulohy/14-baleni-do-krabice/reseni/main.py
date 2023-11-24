if __name__ == "__main__":
    box_volume = float(input())
    input()

    total_objects_volume = 0
    current_object_volume = 0

    while total_objects_volume + current_object_volume <= box_volume and current_object_volume != -1:
        total_objects_volume += current_object_volume
        current_object_volume = float(input())

    print(f"{total_objects_volume:g}")
