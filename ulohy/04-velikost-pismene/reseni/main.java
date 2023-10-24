import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        char letter = input.charAt(0);

        String output = "";

        // Místo čísel lze použít i přímo chary 'a' apod.
        if (letter >= 65 && letter <= 90) {
            output = "upper";
        } else if (letter >= 97 && letter <= 122) {
            output = "lower";
        }

        System.out.println(output);
    }
}
