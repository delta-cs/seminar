#include <iostream>

int main() {
    double boxVolume;
    std::cin >> boxVolume;

    double totalObjectsVolume = 0;
    double currentObjectVolume = 0;

    do {
        totalObjectsVolume += currentObjectVolume;
        std::cin >> currentObjectVolume;
    } while (totalObjectsVolume + currentObjectVolume <= boxVolume && currentObjectVolume != -1);

    std::string output = std::to_string(totalObjectsVolume);
    output.erase(output.find_last_not_of('0') + 1, std::string::npos);
    output.erase(output.find_last_not_of('.') + 1, std::string::npos);

    std::cout << output << std::endl;

    return 0;
}
