#include <iostream>
#include <string>
#include <vector>

int main() {
    int n;
    std::cin >> n;

    if (n < 1) {
        return 0;
    }

    std::vector<std::string> names(n);
    std::vector<double> scores(n);

    double sum = 0;

    for (int i = 0; i < n; i++) {
        std::cin >> names[i];
        std::cin >> scores[i];
        sum += scores[i];
    }

    double average = sum / n;

    for (int i = 0; i < n; i++) {
        if (scores[i] >= average) {
            std::cout << names[i] << std::endl;
        }
    }

    return 0;
}
