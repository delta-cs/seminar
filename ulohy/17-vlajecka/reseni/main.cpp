#include <iostream>

void printFlag(int poleLength, int flagWidth, int heightAboveGround) {
    int flagHeight = flagWidth * 2 - 1;

    if (flagHeight + heightAboveGround > poleLength) {
        std::cout << "invalid" << std::endl;
        return;
    }

    for (int i = 0; i < poleLength - flagHeight - heightAboveGround; i++) {
        std::cout << '|' << std::endl;
    }

    for (int i = 1; i <= flagWidth; i++) {
        for (int j = 1; j <= i; j++) {
            std::cout << '#';
        }
        std::cout << std::endl;
    }

    for (int i = flagWidth - 1; i >= 1; i--) {
        for (int j = 1; j <= i; j++) {
            std::cout << '#';
        }
        std::cout << std::endl;
    }

    for (int i = 0; i < heightAboveGround; i++) {
        std::cout << '|' << std::endl;
    }
}

int main() {
    int p, f, h;
    std::cin >> p >> f >> h;

    printFlag(p, f, h);

    return 0;
}
