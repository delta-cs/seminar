#include <iostream>
#include <cmath>
#include <vector>

void sortByDistance(std::vector<std::string>* cityNames, std::vector<int>* cityLocations, int chestLocation) {
    bool swapped = true;

    while (swapped) {
        swapped = false;

        for (size_t i = 0; i < cityLocations->size() - 1; i++) {
            int distance1 = std::abs(chestLocation - (*cityLocations)[i]);
            int distance2 = std::abs(chestLocation - (*cityLocations)[i + 1]);

            if (distance1 < distance2 || (distance1 == distance2 && (*cityLocations)[i] < (*cityLocations)[i + 1])) {
                continue;
            }

            int tempLocation = (*cityLocations)[i];
            (*cityLocations)[i] = (*cityLocations)[i + 1];
            (*cityLocations)[i + 1] = tempLocation;

            std::string tempName = (*cityNames)[i];
            (*cityNames)[i] = (*cityNames)[i + 1];
            (*cityNames)[i + 1] = tempName;

            swapped = true;
        }
    }
}

int main() {
    int n;
    std::cin >> n;
    std::cin.ignore();

    std::vector<std::string> cityNames(n);
    std::vector<int> cityLocations(n);

    for (int i = 0; i < n; i++) {
        std::cin.ignore();
        std::getline(std::cin, cityNames[i]);
        std::cin >> cityLocations[i];
    }

    int chestLocation;
    std::cin >> chestLocation;

    sortByDistance(&cityNames, &cityLocations, chestLocation);

    for (const auto& cityName : cityNames) {
        std::cout << cityName << std::endl;
    }

    return 0;
}
