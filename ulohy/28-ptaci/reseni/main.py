from typing import List

NONE_ID = 0
BIRD_ID = 1
SPEAKER_ID = 2

def play_speaker(wire_items: List[int], position: int, volume: int, tone: int) -> None:
    if volume < 1 or tone < 1:
        return

    left_edge = max(0, position - volume)
    for i in range(left_edge, position):
        if wire_items[i] != BIRD_ID:
            continue

        new_index = i - tone
        if new_index >= 0 and wire_items[new_index] == NONE_ID:
            wire_items[new_index] = wire_items[i]

        wire_items[i] = NONE_ID

    right_edge = min(len(wire_items) - 1, position + volume)
    for i in range(right_edge, position, -1):
        if wire_items[i] != BIRD_ID:
            continue

        new_index = i + tone
        if new_index < len(wire_items) and wire_items[new_index] == NONE_ID:
            wire_items[new_index] = wire_items[i]

        wire_items[i] = NONE_ID


def print_wire_items(wire_items: List[int]):
    for item in wire_items:
        c = "-"
        if item == BIRD_ID:
            c = "O"
        elif item == SPEAKER_ID:
            c = "|"

        print(c, end="")

    print()


if __name__ == "__main__":
    d = int(input())
    wire_items = [NONE_ID for _ in range(d + 1)]

    p = int(input())
    input()
    for _ in range(p):
        position = int(input())
        wire_items[position] = BIRD_ID

    input()

    s = int(input())
    input()

    speaker_volumes = [0 for _ in range(d + 1)]
    speaker_tones = [0 for _ in range(d + 1)]

    for _ in range(s):
        position = int(input())

        speaker_volumes[position] = int(input())
        speaker_tones[position] = int(input())

        wire_items[position] = SPEAKER_ID

        input()

    z = int(input())
    input()
    for _ in range(z):
        speaker_position = int(input())
        play_speaker(wire_items, speaker_position, speaker_volumes[speaker_position], speaker_tones[speaker_position])

    print_wire_items(wire_items)
