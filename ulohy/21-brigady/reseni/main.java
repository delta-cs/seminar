import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int m = scanner.nextInt();

        int[] hoursWorked = new int[m];
        for (int i = 0; i < m; i++) {
            hoursWorked[i] = scanner.nextInt();
        }

        int salary = 0;
        for (int i = 0; i < m; i++) {
            int hourlyRate = scanner.nextInt();
            salary += hoursWorked[i] * hourlyRate;
        }

        System.out.println(salary);
    }
}
