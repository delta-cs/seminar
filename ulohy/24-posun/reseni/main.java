import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int s = scanner.nextInt();
        int n = scanner.nextInt();

        if (n > 0) {
            // Neboli `s = s % n`.
            s %= n;
        }

        int[] numbers = new int[n];

        for (int i = 0; i < n; i++) {
            numbers[i] = scanner.nextInt();
        }

        int[] numbersShifted = new int[n];
        for (int i = 0; i < n; i++) {
            int newIndex = i + s;
            if (newIndex < 0) {
                newIndex += n;
            } else if (newIndex >= n) {
                newIndex -= n;
            }

            numbersShifted[newIndex] = numbers[i];
        }

        for (int i = 0; i < n; i++) {
            System.out.println(numbersShifted[i]);
        }
    }
}
