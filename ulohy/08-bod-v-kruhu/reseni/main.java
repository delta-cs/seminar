import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double diameter = scanner.nextDouble();
        double centerX = scanner.nextDouble();
        double centerY = scanner.nextDouble();
        double pointX = scanner.nextDouble();
        double pointY = scanner.nextDouble();

        boolean liesInside = liesInside(diameter / 2, centerX, centerY, pointX, pointY);

        System.out.println(liesInside ? "inside" : "outside");
    }

    static boolean liesInside(double radius, double centerX, double centerY, double pointX, double pointY) {
        double a = Math.abs(centerX - pointX);
        double b = Math.abs(centerY - pointY);
        double c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

        return c <= radius;
    }
}
