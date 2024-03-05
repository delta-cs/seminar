#include <iostream>
#include <vector>

int64_t numberOfWays(int target, int currentPosition, const std::vector<int>& availableJumps, std::vector<int64_t> *memo) {
    int64_t sum = 0;

    for (int availableJump : availableJumps) {
        int nextPosition = currentPosition + availableJump;

        if (nextPosition > target) {
            continue;
        }

        sum += (*memo)[nextPosition];
    }

    return sum;
}

int main() {
    int l, j;
    std::cin >> l;
    std::cin.ignore();
    std::cin >> j;
    std::cin.ignore();

    std::vector<int> availableJumps(j);
    for (int i = 0; i < j; i++) {
        std::cin >> availableJumps[i];
    }

    std::vector<int64_t> memo(l + 1, 0);
    memo[l] = 1;

    for (int i = memo.size() - 2; i >= 0; i--) {
        memo[i] = numberOfWays(l, i, availableJumps, &memo);
    }

    std::cout << memo[0] << std::endl;

    return 0;
}
