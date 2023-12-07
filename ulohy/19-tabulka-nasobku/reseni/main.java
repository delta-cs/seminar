import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int cols = scanner.nextInt();
        int rows = scanner.nextInt();

        printMultiplicationTable(rows, cols);
    }

    static void printMultiplicationTable(int rows, int cols) {
        int tableWidth = 1;
        for (int col = 1; col <= cols; col++) {
            tableWidth += countDigits(col * rows) + 3;
        }

        printHorizontalLine(tableWidth);

        for (int row = 1; row <= rows; row++) {
            System.out.print('|');

            for (int col = 1; col <= cols; col++) {
                int result = row * col;

                int columnWidth = countDigits(col * rows);
                for (int pad = 0; pad <= columnWidth - countDigits(result); pad++) {
                    System.out.print(' ');
                }

                System.out.print(result);
                System.out.print(" |");
            }

            System.out.println();
            printHorizontalLine(tableWidth);
        }
    }
    static int countDigits(int number) {
        int count = 0;

        while (number > 0) {
            number /= 10;
            count++;
        }

        return count;
    }

    static void printHorizontalLine(int width) {
        for (int i = 0; i < width; i++) {
            System.out.print('-');
        }
        System.out.println();
    }
}
