import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int b = scanner.nextInt();
        int r = scanner.nextInt();
        double t = scanner.nextDouble();
        int c = scanner.nextInt();

        int result = 0;

        switch (c) {
            case 1:
                int r2 = scanner.nextInt();
                result = solveBoxes(b, r, r2);
                break;

            case 2:
                double t2 = scanner.nextDouble();
                result = solveRobots(r, t, t2);
                break;
        }

        System.out.println(result);
    }

    static int solveBoxes(int b, int r, int r2) {
        return b * r2 / r;
    }

    static int solveRobots(int r, double t, double t2) {
        return (int) Math.ceil(r * t / t2);
    }
}
