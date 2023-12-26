#include <iostream>
#include <vector>
#include <string>

int main() {
    int m;
    std::cin >> m;

    std::vector<std::string> mathClubMembers(m);
    for (int i = 0; i < m; i++) {
        std::cin >> mathClubMembers[i];
    }

    int b;
    std::cin >> b;

    std::vector<std::string> biologyClubMembers(b);
    for (int i = 0; i < b; i++) {
        std::cin >> biologyClubMembers[i];
    }

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < b; j++) {
            if (mathClubMembers[i] == biologyClubMembers[j]) {
                std::cout << mathClubMembers[i] << std::endl;
            }
        }
    }

    return 0;
}
