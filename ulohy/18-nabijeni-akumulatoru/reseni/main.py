if __name__ == "__main__":
    n = int(input())
    input()

    charging = False
    discharging = False

    last_charge_level = 0

    for i in range(n):
        charge_level = float(input())

        if i > 0:
            if charge_level > last_charge_level:
                charging = True
            elif charge_level < last_charge_level:
                discharging = True

        last_charge_level = charge_level

    output = "unused"

    if charging:
        if discharging:
            output = "both"
        else:
            output = "charging"
    elif discharging:
        output = "discharging"

    print(output)
