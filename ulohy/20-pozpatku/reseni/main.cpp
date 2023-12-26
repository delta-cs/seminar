#include <iostream>
#include <vector>

int main() {
    int n;
    std::cin >> n;

    std::vector<int> numbers(n);

    for (int i = 0; i < n; i++) {
        std::cin >> numbers[i];
    }

    for (int i = n - 1; i >= 0; i--) {
        std::cout << numbers[i] << std::endl;
    }
}
