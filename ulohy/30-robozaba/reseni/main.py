from typing import List

def number_of_ways(target: int, current_position: int, available_jumps: List[int], memo: List[int]) -> int:
    result = 0

    for available_jump in available_jumps:
        next_position = current_position + available_jump

        if next_position > target:
            continue

        result += memo[next_position]

    return result


def read_int() -> int:
    return int(input())


if __name__ == "__main__":
    l = read_int()
    input()
    j = read_int()
    input()

    available_jumps = []
    for _ in range(j):
        available_jumps.append(read_int())

    memo = []
    for _ in range(l + 1):
        memo.append(0)
    memo[l] = 1

    for i in range(l - 1, -1, -1):
        memo[i] = number_of_ways(l, i, available_jumps, memo)

    print(memo[0])
