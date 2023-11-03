#include <iostream>
#include <string>
#include <cmath>

bool isValid(double a, double b, double c) {
    double longestSide = std::max(a, std::max(b, c));
    return longestSide < a + b + c - longestSide;
}

bool areCongruent(double a, double b, double c, double k, double l, double m) {
    return (a == k && ((b == l && c == m) || (b == m && c == l))) ||
           (a == l && ((b == k && c == m) || (b == m && c == k))) ||
           (a == m && ((b == k && c == l) || (b == l && c == k)));
}

bool areSimilar(double a, double b, double c, double k, double l, double m) {
    double ratio = a / k;
    if ((b / l == ratio && c / m == ratio) || (c / l == ratio && b / m == ratio))
        return true;

    ratio = b / k;
    if ((a / l == ratio && c / m == ratio) || (c / l == ratio && a / m == ratio))
        return true;

    ratio = c / k;
    if ((a / l == ratio && b / m == ratio) || (b / l == ratio && a / m == ratio))
        return true;

    return false;
}

int main() {
    double a, b, c, k, l, m;

    std::cin >> a >> b >> c >> k >> l >> m;

    std::string result = "invalid";

    if (isValid(a, b, c) && isValid(k, l, m)) {
        if (areCongruent(a, b, c, k, l, m))
            result = "congruent";
        else if (areSimilar(a, b, c, k, l, m))
            result = "similar";
        else
            result = "different";
    }

    std::cout << result << std::endl;

    return 0;
}
