import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int l = scanner.nextInt();
        scanner.nextLine();
        int j = scanner.nextInt();
        scanner.nextLine();

        int[] availableJumps = new int[j];
        for (int i = 0; i < j; i++) {
            availableJumps[i] = scanner.nextInt();
        }

        long[] memo = new long[l + 1];

        memo[l] = 1;

        for (int i = memo.length - 2; i >= 0; i--) {
            memo[i] = numberOfWays(l, i, availableJumps, memo);
        }

        System.out.println(memo[0]);
    }

    static long numberOfWays(int target, int currentPosition, int[] availableJumps, long[] memo) {
        long sum = 0;

        for (int availableJump : availableJumps) {
            int nextPosition = currentPosition + availableJump;

            if (nextPosition > target) {
                continue;
            }

            sum += memo[nextPosition];
        }

        return sum;
    }
}
