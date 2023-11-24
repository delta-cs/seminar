import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = scanner.nextInt();

        printDecomposition(number);
    }

    static void printDecomposition(int number) {
        int size = 0;
        int temp = number;
        while (temp >= 10) {
            temp /= 10;
            size++;
        }

        while (number > 0) {
            int power = (int) Math.pow(10, size);
            int multiple = number / power;

            if (multiple != 0) {
                System.out.println(multiple + " x " + power);
            }

            // Neboli `number = number % power`.
            number %= power;
            size--;
        }
    }
}
