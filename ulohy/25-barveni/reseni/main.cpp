#include <iostream>
#include <vector>

int main() {
    int w, h, n;
    std::cin >> w >> h >> n;

    std::vector<std::vector<bool>> grid(w, std::vector<bool>(h, false));

    for (int i = 0; i < n; i++) {
        int x, y, a, b;
        std::cin >> x >> y >> a >> b;

        for (int col = x - 1; col < x + a - 1; col++) {
            for (int row = y - 1; row < y + b - 1; row++) {
                grid[col][row] = true;
            }
        }
    }

    for (int row = 0; row < h; row++) {
        for (int col = 0; col < w; col++) {
            std::cout << (grid[col][row] ? '#' : '.');
        }

        std::cout << std::endl;
    }

    return 0;
}
