#include <iostream>

int main() {
    int hours, minutes;
    std::cin >> hours >> minutes;

    int minutesTotal = hours * 60 + minutes;

    int startWhite = 6 * 60;
    int endWhite = 21 * 60;
    int intervalWhite = 3 * 60;

    int startRed = 8 * 60;
    int endRed = 22 * 60;
    int intervalRed = 2 * 60;

    int startYellow = 12 * 60 + 45;
    int endYellow = 22 * 60 + 30;
    int intervalYellow = 45;

    bool takeWhite = false;
    bool takeRed = false;
    bool takeYellow = false;

    // Dá se zkrátit na `bool takeWhite = <podmínka>`.
    if (minutesTotal >= startWhite && minutesTotal <= endWhite && (minutesTotal - startWhite) % intervalWhite == 0)
        takeWhite = true;

    if (minutesTotal >= startRed && minutesTotal <= endRed && (minutesTotal - startRed) % intervalRed == 0)
        takeRed = true;

    if (minutesTotal >= startYellow && minutesTotal <= endYellow && (minutesTotal - startYellow) % intervalYellow == 0)
        takeYellow = true;

    if (takeWhite)
        std::cout << "white" << std::endl;

    if (takeRed)
        std::cout << "red" << std::endl;

    if (takeYellow)
        std::cout << "yellow" << std::endl;

    return 0;
}
