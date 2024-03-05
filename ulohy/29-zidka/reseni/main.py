BRICK_WIDTH = 11
BRICK_HEIGHT = 4

if __name__ == "__main__":
    h = int(input())
    w = int(input())

    battlements_enabled = w >= 5

    for i in range(h):
        first_row = i == 0
        full_row = i % 2 == 1 if h % 2 == 0 else i % 2 == 0

        padding = 0

        # --- výpočet odsazení této řady cihel zleva
        if first_row:
            if battlements_enabled:
                padding = BRICK_WIDTH - 1 if full_row else BRICK_WIDTH // 2
            elif not full_row:
                padding = BRICK_WIDTH // 2
        elif i == 1 and battlements_enabled and not full_row:
            padding = BRICK_WIDTH // 2
        # ---

        # výpis vypočteného odsazení
        for _ in range(padding):
            print(" ", end="")

        # --- výpis vrchních hran cihel
        if battlements_enabled and first_row:
            bricks_count = (w - 1 if full_row else w) // 2

            # řada cihel je přerušovaná
            for j in range(bricks_count):
                for _ in range(BRICK_WIDTH):
                    print("#", end="")

                if j != bricks_count - 1:
                    for _ in range(BRICK_WIDTH - 2):
                        print(" ", end="")
        else:
            # řada cihel je plná
            for _ in range((w - 1 if not full_row and (first_row or (i == 1 and battlements_enabled)) else w) * (BRICK_WIDTH - 1) + 1):
                print("#", end="")
        # ---

        print()

        # --- výpis bočních hran cihel
        for _ in range(BRICK_HEIGHT - 2):
            padding = 0

            if battlements_enabled and first_row:
                padding = BRICK_WIDTH - 1 if full_row else BRICK_WIDTH // 2
            elif not full_row:
                padding = BRICK_WIDTH // 2

            for _ in range(padding):
                print(" ", end="")

            if battlements_enabled and first_row:
                if full_row:
                    # zajištění, že poslední cihla cimbuří nebude přepadávat
                    lines_count = w - 3 if w % 2 == 0 else w - 2
                else:
                    lines_count = w - 1 if w % 2 == 0 else w - 2
            else:
                lines_count = w if full_row else w - 1

            # výpis první hrany
            print("#", end="")
            # výpis zbylých hran
            for _ in range(lines_count):
                for _ in range(BRICK_WIDTH - 2):
                    print(" ", end="")

                print("#", end="")

            print()
        # ---

    # výpis spodních hran cihel
    for _ in range(w * (BRICK_WIDTH - 1) + 1):
        print("#", end="")

    print()
