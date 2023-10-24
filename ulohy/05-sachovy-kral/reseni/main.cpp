#include <iostream>
#include <string>

int main() {
    std::string input;

    std::getline(std::cin, input);
    bool check = input == "check";

    std::getline(std::cin, input);
    bool canMove = input == "can move";

    std::string result;

    if (canMove) {
        if (check) {
            result = "check";
        } else {
            result = "continuing";
        }
    } else {
        if (check) {
            result = "check";
        } else {
            result = "stale";
        }

        result += "mate";
    }

    std::cout << result << std::endl;

    return 0;
}
