using System;

internal class Program
{
    static int multiplier = 3;

    static void Main(string[] args)
    {
        int a = 2;
        int b = 3;

        Console.WriteLine(Sum(a, b));

        Console.WriteLine(Multiply(a));

        ChangeMultiplier(4);

        Console.WriteLine(Multiply(a));
    }

    static int Sum(int a, int b)
    {
        int sum = a + b;
        return sum;
    }

    static int Multiply(int number)
    {
        // přístup k vnější proměnné `mutliplier`
        int result = number * multiplier;
        return result;
    }

    static void ChangeMultiplier(int newMultiplier)
    {
        // změna vnější proměnné `mutliplier`
        multiplier = newMultiplier;
    }
}

