import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        scanner.nextLine();

        String[] activityNames = new String[n];
        int[] activityStartTimes = new int[n];
        int[] activityEndTimes = new int[n];

        for (int i = 0; i < n; i++) {
            scanner.nextLine();

            activityNames[i] = scanner.nextLine();

            activityStartTimes[i] = readTime(scanner);
            activityEndTimes[i] = readTime(scanner);

            scanner.nextLine();
        }

        int currentTime = readTime(scanner);

        boolean activityFound = false;
        for (int i = 0; i < n; i++) {
            int startTime = activityStartTimes[i];
            int endTime = activityEndTimes[i];

            if ((currentTime >= startTime && currentTime <= endTime)
                    || (startTime > endTime && (currentTime >= startTime || currentTime <= endTime))) {
                activityFound = true;
                System.out.println(activityNames[i]);
                break;
            }
        }

        if (!activityFound) {
            System.out.println("none");
        }
    }

    static int readTime(Scanner scanner) {
        int hours = scanner.nextInt();
        int minutes = scanner.nextInt();
        return hours * 60 + minutes;
    }
}
