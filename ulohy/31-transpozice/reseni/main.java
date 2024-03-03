import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int w = scanner.nextInt();
        int h = scanner.nextInt();

        if (w < 1 || h < 1) {
            return;
        }

        char[][] table = new char[h][w];

        for (int row = 0; row < h; row++) {
            for (int col = 0; col < w; col++) {
                table[row][col] = scanner.next().charAt(0);
            }
        }

        for (int col = 0; col < w; col++) {
            for (int row = 0; row < h; row++) {
                System.out.print(table[row][col]);
            }
            System.out.println();
        }
    }
}
