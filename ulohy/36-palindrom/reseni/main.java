import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = scanner.nextLine().toLowerCase();
        String language = scanner.nextLine();

        if (language.equals("cz")) {
            text = text.replace("ch", "*");
        }

        text = text.replace(" ", "");

        boolean isPalindrome = true;

        int half = (int) Math.ceil((double) text.length() / 2);
        for (int i = 0; i < half; i++) {
            if (text.charAt(i) != text.charAt(text.length() - i - 1)) {
                isPalindrome = false;
                break;
            }
        }

        System.out.println(isPalindrome ? "true" : "false");
    }
}
