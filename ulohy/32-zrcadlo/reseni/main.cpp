#include <iostream>
#include <vector>

int main() {
    int w, h;
    char direction;

    std::cin >> w >> h >> direction;

    if (w < 1 || h < 1) {
        return 0;
    }

    std::vector<std::vector<char>> paper(h, std::vector<char>(w));

    for (int row = 0; row < h; row++) {
        for (int col = 0; col < w; col++) {
            std::cin >> paper[row][col];
        }
    }

    switch (direction) {
        case 'p':
            for (int row = 0; row < h; row++) {
                for (int col = w - 1; col >= 0; col--) {
                    std::cout << paper[row][col];
                }
                std::cout << std::endl;
            }
            break;

        case 's':
            for (int row = h - 1; row >= 0; row--) {
                for (int col = 0; col < w; col++) {
                    std::cout << paper[row][col];
                }
                std::cout << std::endl;
            }
            break;
    }

    return 0;
}
