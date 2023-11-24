#include <iostream>

int main() {
    int n;
    std::cin >> n;

    int countEven = 0;
    int countOdd = 0;

    for (int i = 0; i < n; i++) {
        int number;
        std::cin >> number;

        if (number % 2 == 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }

    std::string output = "equal";
    if (countEven > countOdd) {
        output = "even";
    } else if (countEven < countOdd) {
        output = "odd";
    }

    std::cout << output << std::endl;

    return 0;
}
