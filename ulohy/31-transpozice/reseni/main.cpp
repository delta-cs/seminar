#include <iostream>
#include <vector>

int main() {
    int w, h;
    std::cin >> w >> h;

    if (w < 1 || h < 1) {
        return 0;
    }

    std::vector<std::vector<char>> table(h, std::vector<char>(w));

    for (int row = 0; row < h; row++) {
        for (int col = 0; col < w; col++) {
            std::cin >> table[row][col];
        }
    }

    for (int col = 0; col < w; col++) {
        for (int row = 0; row < h; row++) {
            std::cout << table[row][col];
        }
        std::cout << std::endl;
    }

    return 0;
}
