import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();

        int countEven = 0;
        int countOdd = 0;

        for (int i = 0; i < n; i++) {
            int number = scanner.nextInt();

            if (number % 2 == 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }

        String output = "equal";
        if (countEven > countOdd) {
            output = "even";
        } else if (countEven < countOdd) {
            output = "odd";
        }

        System.out.println(output);
    }
}
