#include <iostream>

const int BRICK_WIDTH = 11;
const int BRICK_HEIGHT = 4;

int main() {
    int h, w;
    std::cin >> h >> w;

    bool battlementsEnabled = w >= 5;

    for (int i = 0; i < h; i++) {
        bool firstRow = i == 0;
        bool fullRow = h % 2 == 0 ? i % 2 == 1 : i % 2 == 0;

        int padding = 0;

        // --- výpočet odsazení této řady cihel zleva
        if (firstRow) {
            if (battlementsEnabled) {
                padding = fullRow ? BRICK_WIDTH - 1 : BRICK_WIDTH / 2;
            } else if (!fullRow) {
                padding = BRICK_WIDTH / 2;
            }
        } else if (i == 1 && battlementsEnabled && !fullRow) {
            padding = BRICK_WIDTH / 2;
        }
        // ---

        // výpis vypočteného odsazení
        for (int j = 0; j < padding; j++) {
            std::cout << ' ';
        }

        // --- výpis vrchních hran cihel
        if (battlementsEnabled && firstRow) {
            int bricksCount = (fullRow ? w - 1 : w) / 2;

            // řada cihel je přerušovaná
            for (int j = 0; j < bricksCount; j++) {
                for (int k = 0; k < BRICK_WIDTH; k++) {
                    std::cout << '#';
                }

                if (j != bricksCount - 1) {
                    for (int k = 0; k < BRICK_WIDTH - 2; k++) {
                        std::cout << ' ';
                    }
                }
            }
        } else {
            // řada cihel je plná
            for (int j = 0;
                j < (!fullRow && (firstRow || (i == 1 && battlementsEnabled)) ? w - 1 : w) * (BRICK_WIDTH - 1) + 1;
                j++) {
                std::cout << '#';
            }
        }
        // ---

        std::cout << std::endl;

        // --- výpis bočních hran cihel
        for (int j = 0; j < BRICK_HEIGHT - 2; j++) {
            padding = 0;

            if (battlementsEnabled && firstRow) {
                padding = fullRow ? BRICK_WIDTH - 1 : BRICK_WIDTH / 2;
            } else if (!fullRow) {
                padding = BRICK_WIDTH / 2;
            }

            for (int k = 0; k < padding; k++) {
                std::cout << ' ';
            }

            int linesCount;

            if (battlementsEnabled && firstRow) {
                if (fullRow) {
                    // zajištění, že poslední cihla cimbuří nebude přepadávat
                    linesCount = w % 2 == 0 ? w - 3 : w - 2;
                } else {
                    linesCount = w % 2 == 0 ? w - 1 : w - 2;
                }
            } else {
                linesCount = fullRow ? w : w - 1;
            }

            // výpis první hrany
            std::cout << '#';
            // výpis zbylých hran
            for (int k = 0; k < linesCount; k++) {
                for (int l = 0; l < BRICK_WIDTH - 2; l++) {
                    std::cout << ' ';
                }

                std::cout << '#';
            }

            std::cout << std::endl;
        }
        // ---
    }

    // výpis spodních hran cihel
    for (int j = 0; j < w * (BRICK_WIDTH - 1) + 1; j++) {
        std::cout << '#';
    }

    std::cout << std::endl;

    return 0;
}
