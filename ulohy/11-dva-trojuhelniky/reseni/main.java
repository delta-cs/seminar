import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double a = scanner.nextDouble();
        double b = scanner.nextDouble();
        double c = scanner.nextDouble();
        double k = scanner.nextDouble();
        double l = scanner.nextDouble();
        double m = scanner.nextDouble();

        System.out.println(solve(a, b, c, k, l, m));
    }

    static String solve(double a, double b, double c, double k, double l, double m) {
        if (!isValid(a, b, c) || !isValid(k, l, m))
            return "invalid";

        if (areCongruent(a, b, c, k, l, m))
            return "congruent";

        if (areSimilar(a, b, c, k, l, m))
            return "similar";

        return "different";
    }

    static boolean isValid(double a, double b, double c) {
        double longestSide = Math.max(a, Math.max(b, c));
        return longestSide < a + b + c - longestSide;
    }

    static boolean areCongruent(double a, double b, double c, double k, double l, double m) {
        return (a == k && ((b == l && c == m) || (b == m && c == l)))
                || (a == l && ((b == k && c == m) || (b == m && c == k)))
                || (a == m && ((b == k && c == l) || (b == l && c == k)));
    }

    static boolean areSimilar(double a, double b, double c, double k, double l, double m) {
        double ratio = a / k;
        if ((b / l == ratio && c / m == ratio) || (c / l == ratio && b / m == ratio))
            return true;

        ratio = b / k;
        if ((a / l == ratio && c / m == ratio) || (c / l == ratio && a / m == ratio))
            return true;

        ratio = c / k;
        if ((a / l == ratio && b / m == ratio) || (b / l == ratio && a / m == ratio))
            return true;

        return false;
    }
}
