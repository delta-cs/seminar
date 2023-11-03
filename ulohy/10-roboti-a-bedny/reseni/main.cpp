#include <iostream>
#include <cmath>

int solveBoxes(int b, int r, int r2) {
    return b * r2 / r;
}

int solveRobots(int r, double t, double t2) {
    return std::ceil(r * t / t2);
}

int main() {
    int b, r, r2, c;
    double t, t2;

    std::cin >> b >> r >> t;

    int result = 0;

    std::cin >> c;
    switch (c) {
        case 1:
            std::cin >> r2;
            result = solveBoxes(b, r, r2);
            break;

        case 2:
            std::cin >> t2;
            result = solveRobots(r, t, t2);
            break;
    }

    std::cout << result << std::endl;

    return 0;
}
