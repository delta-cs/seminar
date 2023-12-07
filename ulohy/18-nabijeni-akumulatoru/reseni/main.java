import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();

        boolean charging = false;
        boolean discharging = false;

        double lastChargeLevel = 0;

        for (int i = 0; i < n; i++) {
            double chargeLevel = scanner.nextDouble();

            if (i > 0) {
                if (chargeLevel > lastChargeLevel) {
                    charging = true;
                } else if (chargeLevel < lastChargeLevel) {
                    discharging = true;
                }
            }

            lastChargeLevel = chargeLevel;
        }

        String output = "unused";

        if (charging) {
            if (discharging) {
                output = "both";
            } else {
                output = "charging";
            }
        } else if (discharging) {
            output = "discharging";
        }

        System.out.println(output);
    }
}
