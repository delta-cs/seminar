#include <iostream>
#include <string>

int main() {
    int n;
    std::cin >> n;
    std::cin.ignore();

    bool charging = false;
    bool discharging = false;

    double lastChargeLevel = 0;

    for (int i = 0; i < n; i++) {
        double chargeLevel;
        std::cin >> chargeLevel;

        if (i > 0) {
            if (chargeLevel > lastChargeLevel) {
                charging = true;
            } else if (chargeLevel < lastChargeLevel) {
                discharging = true;
            }
        }

        lastChargeLevel = chargeLevel;
    }

    std::string output = "unused";

    if (charging) {
        if (discharging) {
            output = "both";
        } else {
            output = "charging";
        }
    } else if (discharging) {
        output = "discharging";
    }

    std::cout << output << std::endl;

    return 0;
}
