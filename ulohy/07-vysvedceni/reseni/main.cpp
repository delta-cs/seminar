#include <iostream>
#include <string>

int main() {
    std::string input;
    std::getline(std::cin, input);
    int mark = std::stoi(input);

    std::getline(std::cin, input);
    bool attendedContests = input == "attended";

    std::getline(std::cin, input);
    double absencePercentage = std::stod(input);

    std::getline(std::cin, input);
    bool isPolite = input == "polite";

    // Dá se zkrátit na `bool passed = <podmínka>`.
    bool passed = false;
    if (mark < 5 && (absencePercentage <= 20 || attendedContests || (mark == 1 && isPolite))) {
        passed = true;
    }

    // Použití ternárního operátoru.
    std::cout << (passed ? "passed" : "failed") << std::endl;

    return 0;
}
