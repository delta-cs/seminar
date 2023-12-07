#include <iostream>

void printRhomboid(int side, int height) {
    for (int i = 0; i < height; i++) {
        for (int j = 0; j < height - i - 1; j++) {
            std::cout << ' ';
        }

        for (int j = 0; j < side; j++) {
            char output = (i > 0 && i < height - 1 && j > 0 && j < side - 1) ? ' ' : '#';
            std::cout << output;
        }

        std::cout << std::endl;
    }
}

int main() {
    int side, height;
    std::cin >> side >> height;

    printRhomboid(side, height);

    return 0;
}
