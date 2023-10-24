import sys

if __name__ == "__main__":
    line = input()
    letter = line[0]
    charCode = ord(letter)

    output = ""

    if 65 <= charCode <= 90:
        output = "upper"
    elif 97 <= charCode <= 122:
        output = "lower"

    print(output)
