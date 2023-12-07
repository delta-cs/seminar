import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int p = scanner.nextInt();
        int f = scanner.nextInt();
        int h = scanner.nextInt();

        printFlag(p, f, h);
    }


    static void printFlag(int poleLength, int flagWidth, int heightAboveGround) {
        int flagHeight = flagWidth * 2 - 1;

        if (flagHeight + heightAboveGround > poleLength) {
            System.out.println("invalid");
            return;
        }

        for (int i = 0; i < poleLength - flagHeight - heightAboveGround; i++) {
            System.out.println('|');
        }

        for (int i = 1; i <= flagWidth; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print('#');
            }
            System.out.println();
        }

        for (int i = flagWidth - 1; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print('#');
            }
            System.out.println();
        }

        for (int i = 0; i < heightAboveGround; i++) {
            System.out.println('|');
        }
    }
}
