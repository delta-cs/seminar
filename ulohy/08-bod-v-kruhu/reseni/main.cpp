#include <iostream>
#include <cmath>

bool liesInside(double radius, double centerX, double centerY, double pointX, double pointY) {
    double a = std::abs(centerX - pointX);
    double b = std::abs(centerY - pointY);
    double c = std::sqrt(std::pow(a, 2) + std::pow(b, 2));

    return c <= radius;
}

int main() {
    double diameter, centerX, centerY, pointX, pointY;

    std::cin >> diameter >> centerX >> centerY >> pointX >> pointY;

    bool liesInsideResult = liesInside(diameter / 2, centerX, centerY, pointX, pointY);

    std::cout << (liesInsideResult ? "inside" : "outside") << std::endl;

    return 0;
}
