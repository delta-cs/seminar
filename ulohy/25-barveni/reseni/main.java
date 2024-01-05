import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int w = scanner.nextInt();
        int h = scanner.nextInt();
        int n = scanner.nextInt();

        boolean[][] grid = new boolean[w][h];

        for (int i = 0; i < n; i++) {
            int x = scanner.nextInt();
            int y = scanner.nextInt();
            int a = scanner.nextInt();
            int b = scanner.nextInt();

            for (int col = x - 1; col < x + a - 1; col++) {
                for (int row = y - 1; row < y + b - 1; row++) {
                    grid[col][row] = true;
                }
            }
        }

        for (int row = 0; row < h; row++) {
            for (int col = 0; col < w; col++) {
                System.out.print(grid[col][row] ? '#' : '.');
            }

            System.out.println();
        }
    }
}
