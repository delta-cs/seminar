#include <iostream>
#include <vector>

int main() {
    int s, n;
    std::cin >> s >> n;

    if (n > 0) {
        // Neboli `s = s % n`.
        s %= n;
    }

    std::vector<int> numbers(n);
    for (int i = 0; i < n; i++) {
        std::cin >> numbers[i];
    }

    std::vector<int> numbersShifted(n);
    for (int i = 0; i < n; i++) {
        int newIndex = i + s;
        if (newIndex < 0) {
            newIndex += n;
        } else if (newIndex >= n) {
            newIndex -= n;
        }

        numbersShifted[newIndex] = numbers[i];
    }

    for (int i = 0; i < n; i++) {
        std::cout << numbersShifted[i] << std::endl;
    }

    return 0;
}
