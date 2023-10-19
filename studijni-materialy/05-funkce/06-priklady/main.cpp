#include <iostream>

int multiplier = 3;

int sum(int a, int b) {
    int result = a + b;
    return result;
}

int multiply(int number) {
    // přístup k vnější proměnné `mutliplier`
    int result = number * multiplier;
    return result;
}

void changeMultiplier(int newMultiplier) {
    // změna vnější proměnné `mutliplier`
    multiplier = newMultiplier;
}

int main() {
    int a = 2;
    int b = 3;

    std::cout << sum(a, b) << std::endl;
    
    std::cout << multiply(a) << std::endl;
    
    changeMultiplier(4);
    
    std::cout << multiply(a) << std::endl;

    return 0;
}

