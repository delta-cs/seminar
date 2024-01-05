import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        scanner.nextLine();

        String[] cityNames = new String[n];
        int[] cityLocations = new int[n];

        for (int i = 0; i < n; i++) {
            scanner.nextLine();
            cityNames[i] = scanner.nextLine();
            cityLocations[i] = scanner.nextInt();
        }


        int chestLocation = scanner.nextInt();

        sortByDistance(cityNames, cityLocations, chestLocation);

        for (int i = 0; i < n; i++) {
            System.out.println(cityNames[i]);
        }
    }

    static void sortByDistance(String[] cityNames, int[] cityLocations, int chestLocation) {
        boolean swapped = true;

        while (swapped) {
            swapped = false;

            for (int i = 0; i < cityLocations.length - 1; i++) {
                int distance1 = Math.abs(chestLocation - cityLocations[i]);
                int distance2 = Math.abs(chestLocation - cityLocations[i + 1]);

                if (distance1 < distance2 || (distance1 == distance2 && cityLocations[i] < cityLocations[i + 1])) {
                    continue;
                }

                int tempLocation = cityLocations[i];
                cityLocations[i] = cityLocations[i + 1];
                cityLocations[i + 1] = tempLocation;

                String tempName = cityNames[i];
                cityNames[i] = cityNames[i + 1];
                cityNames[i + 1] = tempName;

                swapped = true;
            }
        }
    }
}
