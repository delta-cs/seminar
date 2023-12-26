#include <iostream>
#include <vector>

int main() {
    int m;
    std::cin >> m;

    std::vector<int> hoursWorked(m);

    for (int i = 0; i < m; i++) {
        std::cin >> hoursWorked[i];
    }


    int salary = 0;
    for (int i = 0; i < m; i++) {
        int hourlyRate;
        std::cin >> hourlyRate;
        salary += hoursWorked[i] * hourlyRate;
    }

    std::cout << salary << std::endl;

    return 0;
}
