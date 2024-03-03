import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int w = scanner.nextInt();
        int h = scanner.nextInt();
        char direction = scanner.next().charAt(0);

        if (w < 1 || h < 1) {
            return;
        }

        char[][] paper = new char[h][w];

        for (int row = 0; row < h; row++) {
            for (int col = 0; col < w; col++) {
                paper[row][col] = scanner.next().charAt(0);
            }
        }

        switch (direction) {
            case 'p':
                for (int row = 0; row < h; row++) {
                    for (int col = w - 1; col >= 0; col--) {
                        System.out.print(paper[row][col]);
                    }
                    System.out.println();
                }
                break;

            case 's':
                for (int row = h - 1; row >= 0; row--) {
                    for (int col = 0; col < w; col++) {
                        System.out.print(paper[row][col]);
                    }
                    System.out.println();
                }
                break;
        }
    }
}
