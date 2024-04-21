import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String number = scanner.nextLine();
        int decimalDotIndex = number.indexOf('.');

        if (decimalDotIndex == -1) {
            decimalDotIndex = number.length();
        }

        for (int i = 0; i < decimalDotIndex; i++) {
            char multiple = number.charAt(i);

            if (multiple == '0') {
                continue;
            }

            System.out.print(multiple + " x 1");
            for (int j = 0; j < decimalDotIndex - i - 1; j++) {
                System.out.print('0');
            }

            System.out.println();
        }

        for (int i = decimalDotIndex + 1; i < number.length(); i++) {
            char multiple = number.charAt(i);

            if (multiple == '0') {
                continue;
            }

            System.out.print(multiple + " x 0.");
            for (int j = 0; j < i - decimalDotIndex - 1; j++) {
                System.out.print('0');
            }

            System.out.println('1');
        }
    }
}
