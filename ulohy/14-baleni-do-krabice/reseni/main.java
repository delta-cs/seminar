import java.util.Scanner;
import java.text.DecimalFormat;

class Main {
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        double boxVolume = scanner.nextDouble();

        double totalObjectsVolume = 0;
        double currentObjectVolume = 0;

        do {
            totalObjectsVolume += currentObjectVolume;
            currentObjectVolume = scanner.nextDouble();
        } while (totalObjectsVolume + currentObjectVolume <= boxVolume && currentObjectVolume != -1);

        System.out.println(new DecimalFormat("#.################").format(totalObjectsVolume));
    }
}
