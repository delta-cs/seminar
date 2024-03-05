import java.util.Scanner;

class Main {
    static final int BRICK_WIDTH = 11;
    static final int BRICK_HEIGHT = 4;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int h = scanner.nextInt();
        int w = scanner.nextInt();

        boolean battlementsEnabled = w >= 5;

        for (int i = 0; i < h; i++) {
            boolean firstRow = i == 0;
            boolean fullRow = h % 2 == 0 ? i % 2 == 1 : i % 2 == 0;

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
                System.out.print(' ');
            }

            // --- výpis vrchních hran cihel
            if (battlementsEnabled && firstRow) {
                int bricksCount = (fullRow ? w - 1 : w) / 2;

                // řada cihel je přerušovaná
                for (int j = 0; j < bricksCount; j++) {
                    for (int k = 0; k < BRICK_WIDTH; k++) {
                        System.out.print('#');
                    }

                    if (j != bricksCount - 1) {
                        for (int k = 0; k < BRICK_WIDTH - 2; k++) {
                            System.out.print(' ');
                        }
                    }
                }
            } else {
                // řada cihel je plná
                for (int j = 0;
                     j < (!fullRow && (firstRow || (i == 1 && battlementsEnabled)) ? w - 1 : w) * (BRICK_WIDTH - 1) + 1;
                     j++) {
                    System.out.print('#');
                }
            }
            // ---

            System.out.println();

            // --- výpis bočních hran cihel
            for (int j = 0; j < BRICK_HEIGHT - 2; j++) {
                padding = 0;

                if (battlementsEnabled && firstRow) {
                    padding = fullRow ? BRICK_WIDTH - 1 : BRICK_WIDTH / 2;
                } else if (!fullRow) {
                    padding = BRICK_WIDTH / 2;
                }

                for (int k = 0; k < padding; k++) {
                    System.out.print(' ');
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
                System.out.print('#');
                // výpis zbylých hran
                for (int k = 0; k < linesCount; k++) {
                    for (int l = 0; l < BRICK_WIDTH - 2; l++) {
                        System.out.print(' ');
                    }

                    System.out.print('#');
                }

                System.out.println();
            }
            // ---
        }

        // výpis spodních hran cihel
        for (int j = 0; j < w * (BRICK_WIDTH - 1) + 1; j++) {
            System.out.print('#');
        }

        System.out.println();
    }
}
