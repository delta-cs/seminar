if __name__ == "__main__":
    m = int(input())
    input()

    math_club_members = []
    for _ in range(m):
        math_club_members.append(input())

    input()

    b = int(input())

    input()

    biology_club_members = []
    for _ in range(b):
        biology_club_members.append(input())

    for i in range(m):
        for j in range(b):
            if math_club_members[i] == biology_club_members[j]:
                print(math_club_members[i])
