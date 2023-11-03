import sys


def read_float() -> float:
    return float(input())


def is_valid(a: float, b: float, c: float) -> bool:
    longest_side = max(a, max(b, c))
    return longest_side < a + b + c - longest_side


def are_congruent(a: float, b: float, c: float, k: float, l: float, m: float) -> bool:
    return (a == k and ((b == l and c == m) or (b == m and c == l))) \
        or (a == l and ((b == k and c == m) or (b == m and c == k))) \
        or (a == m and ((b == k and c == l) or (b == l and c == k)))


def are_similar(a: float, b: float, c: float, k: float, l: float, m: float) -> bool:
    ratio = a / k
    if (b / l == ratio and c / m == ratio) or (c / l == ratio and b / m == ratio):
        return True

    ratio = b / k
    if (a / l == ratio and c / m == ratio) or (c / l == ratio and a / m == ratio):
        return True

    ratio = c / k
    if (a / l == ratio and b / m == ratio) or (b / l == ratio and a / m == ratio):
        return True

    return False


def solve(a: float, b: float, c: float, k: float, l: float, m: float) -> str:
    if not is_valid(a, b, c) or not is_valid(k, l, m):
        return "invalid"

    if are_congruent(a, b, c, k, l, m):
        return "congruent"

    if are_similar(a, b, c, k, l, m):
        return "similar"

    return "different"


if __name__ == "__main__":
    a = read_float()
    b = read_float()
    c = read_float()
    k = read_float()
    l = read_float()
    m = read_float()

    print(solve(a, b, c, k, l, m))
