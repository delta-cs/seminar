#include <iostream>

int countDigits(int number) {
    int count = 0;

    while (number > 0) {
        number /= 10;
        count++;
    }

    return count;
}

void printHorizontalLine(int width) {
    for (int i = 0; i < width; i++) {
        std::cout << '-';
    }
    std::cout << std::endl;
}

void printMultiplicationTable(int rows, int cols) {
    int tableWidth = 1;
    for (int col = 1; col <= cols; col++) {
        tableWidth += countDigits(col * rows) + 3;
    }

    printHorizontalLine(tableWidth);

    for (int row = 1; row <= rows; row++) {
        std::cout << '|';

        for (int col = 1; col <= cols; col++) {
            int result = row * col;

            int columnWidth = countDigits(col * rows);
            for (int pad = 0; pad <= columnWidth - countDigits(result); pad++) {
                std::cout << ' ';
            }

            std::cout << result << " |";
        }

        std::cout << std::endl;
        printHorizontalLine(tableWidth);
    }
}

int main() {
    int cols, rows;
    std::cin >> cols >> rows;

    printMultiplicationTable(rows, cols);

    return 0;
}
