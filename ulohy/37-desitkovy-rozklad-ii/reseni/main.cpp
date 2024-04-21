#include <iostream>
#include <string>

int main() {
    std::string number;
    std::cin >> number;
    int decimalDotIndex = number.find('.');

    if (decimalDotIndex == -1) {
        decimalDotIndex = number.length();
    }

    for (int i = 0; i < decimalDotIndex; i++) {
        char multiple = number[i];

        if (multiple == '0') {
            continue;
        }

        std::cout << multiple << " x 1";
        for (int j = 0; j < decimalDotIndex - i - 1; j++) {
            std::cout << '0';
        }

        std::cout << std::endl;
    }

    for (int i = decimalDotIndex + 1; i < number.length(); i++) {
        char multiple = number[i];

        if (multiple == '0') {
            continue;
        }

        std::cout << multiple << " x 0.";
        for (int j = 0; j < i - decimalDotIndex - 1; j++) {
            std::cout << '0';
        }

        std::cout << '1' << std::endl;
    }

    return 0;
}
