#include <iostream>
#include <cmath>

void printDecomposition(int number) {
    int size = 0;
    int temp = number;
    while (temp >= 10) {
        temp /= 10;
        size++;
    }

    while (number > 0) {
        int power = (int)std::pow(10, size);
        int multiple = number / power;

        if (multiple != 0) {
            std::cout << multiple << " x " << power << std::endl;
        }

        number %= power;
        size--;
    }
}

int main() {
    int number;
    std::cin >> number;

    printDecomposition(number);

    return 0;
}
