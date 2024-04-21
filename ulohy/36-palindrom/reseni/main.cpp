#include <iostream>
#include <algorithm>
#include <cmath>

int main() {
    std::string text;
    std::getline(std::cin, text);
    std::transform(text.begin(), text.end(), text.begin(), ::tolower);

    std::string language;
    std::getline(std::cin, language);

    if (language == "cz") {
        size_t pos = text.find("ch");
        while (pos != std::string::npos) {
            text.replace(pos, 2, "*");
            pos = text.find("ch", pos + 1);
        }
    }

    text.erase(std::remove(text.begin(), text.end(), ' '), text.end());

    bool isPalindrome = true;
    int half = static_cast<int>(std::ceil(static_cast<double>(text.length()) / 2));

    for (int i = 0; i < half; i++) {
        if (text[i] != text[text.length() - i - 1]) {
            isPalindrome = false;
            break;
        }
    }

    std::cout << (isPalindrome ? "true" : "false") << std::endl;

    return 0;
}
