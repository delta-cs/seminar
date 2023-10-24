import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int mark = Integer.parseInt(scanner.nextLine());
        boolean attendedContests = scanner.nextLine().equals("attended");
        double absencePercentage = Double.parseDouble(scanner.nextLine());
        boolean isPolite = scanner.nextLine().equals("polite");

        // Dá se zkrátit na `boolean passed = <podmínka>`.
        boolean passed = false;
        if (mark < 5 && (absencePercentage <= 20 || attendedContests || (mark == 1 && isPolite))) {
            passed = true;
        }

        // Použití ternárního operátoru.
        System.out.println(passed ? "passed" : "failed");
    }
}
