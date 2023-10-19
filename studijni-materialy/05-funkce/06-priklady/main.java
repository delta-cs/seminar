class Main {
    static int multiplier = 3;

    public static void main(String[] args) {
        int a = 2;
        int b = 3;

        System.out.println(sum(a, b));

        System.out.println(multiply(a));

        changeMultiplier(4);

        System.out.println(multiply(a));
    }

    static int sum(int a, int b) {
        int sum = a + b;
        return sum;
    }

    static int multiply(int number) {
        // přístup k vnější proměnné `mutliplier`
        int result = number * multiplier;
        return result;
    }

    static void changeMultiplier(int newMultiplier) {
        // změna vnější proměnné `mutliplier`
        multiplier = newMultiplier;
    }
}

