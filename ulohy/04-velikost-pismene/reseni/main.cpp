#include <iostream>
#include <string>

int main() {
    char letter;
    std::cin >> letter;

    std::string output;

    // Místo čísel lze použít i přímo chary 'a' apod.
    if (letter >= 65 && letter <= 90) {
        output = "upper";
    } else if (letter >= 97 && letter <= 122) {
        output = "lower";
    }

    std::cout << output << std::endl;

    return 0;
}
