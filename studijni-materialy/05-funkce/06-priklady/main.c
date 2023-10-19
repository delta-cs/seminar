#include <stdio.h>

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

    printf("%d\n", sum(a, b));
    
    printf("%d\n", multiply(a));
    
    changeMultiplier(4);
    
    printf("%d\n", multiply(a));

    return 0;
}

