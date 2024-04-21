import math

if __name__ == "__main__":
    text = input().lower()
    language = input()

    if language == "cz":
        text = text.replace("ch", "*")

    text = text.replace(" ", "")

    is_palindrome = True

    half = math.ceil(len(text) / 2)
    for i in range(half):
        if text[i] != text[len(text) - i - 1]:
            is_palindrome = False
            break

    print("true" if is_palindrome else "false")
