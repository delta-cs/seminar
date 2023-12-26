import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int m = Integer.parseInt(scanner.nextLine());
        scanner.nextLine();

        String[] mathClubMembers = new String[m];
        for (int i = 0; i < m; i++) {
            mathClubMembers[i] = scanner.nextLine();
        }

        scanner.nextLine();

        int b = Integer.parseInt(scanner.nextLine());
        scanner.nextLine();

        String[] biologyClubMembers = new String[b];
        for (int i = 0; i < b; i++) {
            biologyClubMembers[i] = scanner.nextLine();
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < b; j++) {
                if (mathClubMembers[i].equals(biologyClubMembers[j])) {
                    System.out.println(mathClubMembers[i]);
                }
            }
        }
    }
}
