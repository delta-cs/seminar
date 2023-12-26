#include <iostream>
#include <string>
#include <vector>

int readTime() {
    int hours, minutes;
    std::cin >> hours >> minutes;
    return hours * 60 + minutes;
}

int main() {
    int n;
    std::cin >> n;
    std::cin.ignore();

    std::vector<std::string> activityNames(n);
    std::vector<int> activityStartTimes(n);
    std::vector<int> activityEndTimes(n);

    for (int i = 0; i < n; i++) {
        std::cin.ignore();

        std::getline(std::cin, activityNames[i]);

        activityStartTimes[i] = readTime();
        activityEndTimes[i] = readTime();

        std::cin.ignore();
    }

    int currentTime = readTime();

    bool activityFound = false;
    for (int i = 0; i < n; i++) {
        int startTime = activityStartTimes[i];
        int endTime = activityEndTimes[i];

        if ((currentTime >= startTime && currentTime <= endTime)
            || (startTime > endTime && (currentTime >= startTime || currentTime <= endTime))) {
            activityFound = true;
            std::cout << activityNames[i] << std::endl;
            break;
        }
    }

    if (!activityFound) {
        std::cout << "none" << std::endl;
    }

    return 0;
}
