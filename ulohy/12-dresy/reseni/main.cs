using System;

internal class Program
{
    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());
        Console.ReadLine();

        int countEven = 0;
        int countOdd = 0;

        for (int i = 0; i < n; i++)
        {
            int number = int.Parse(Console.ReadLine());

            if (number % 2 == 0)
            {
                countEven++;
            }
            else
            {
                countOdd++;
            }
        }

        string output = "equal";
        if (countEven > countOdd)
        {
            output = "even";
        }
        else if (countEven < countOdd)
        {
            output = "odd";
        }

        Console.WriteLine(output);
    }
}
