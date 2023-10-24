import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        boolean check = scanner.nextLine().equals("check");
        boolean canMove = scanner.nextLine().equals("can move");

        String result;

        if (canMove) {
            if (check) {
                result = "check";
            } else {
                result = "continuing";
            }
        } else {
            if (check) {
                result = "check";
            } else {
                result = "stale";
            }

            result += "mate";
        }

        System.out.println(result);
    }
}
