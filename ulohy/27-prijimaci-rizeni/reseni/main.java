import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();

        if (n < 1) {
            return;
        }

        String[] names = new String[n];
        double[] scores = new double[n];

        double sum = 0;

        for (int i = 0; i < n; i++) {
            names[i] = scanner.next();
            scores[i] = scanner.nextDouble();
            sum += scores[i];
        }

        double average = sum / n;

        for (int i = 0; i < n; i++) {
            if (scores[i] >= average) {
                System.out.println(names[i]);
            }
        }
    }
}
