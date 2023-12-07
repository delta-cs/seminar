import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int side = scanner.nextInt();
        int height = scanner.nextInt();

        printRhomboid(side, height);
    }

    static void printRhomboid(int side, int height) {
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < height - i - 1; j++) {
                System.out.print(' ');
            }

            for (int j = 0; j < side; j++) {
                char output = (i > 0 && i < height - 1 && j > 0 && j < side - 1) ? ' ' : '#';
                System.out.print(output);
            }

            System.out.println();
        }
    }
}
