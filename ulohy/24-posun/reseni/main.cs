using System;

internal class Program
{
    static void Main(string[] args)
    {
        int s = ReadInt();
        int n = ReadInt();
        Console.ReadLine();

        if (n > 0)
        {
            // Neboli `s = s % n`.
            s %= n;
        }

        int[] numbers = new int[n];

        for (int i = 0; i < n; i++)
        {
            numbers[i] = ReadInt();
        }

        int[] numbersShifted = new int[n];
        for (int i = 0; i < n; i++)
        {
            int newIndex = i + s;
            if (newIndex < 0)
            {
                newIndex += n;
            }
            else if (newIndex >= n)
            {
                newIndex -= n;
            }

            numbersShifted[newIndex] = numbers[i];
        }

        for (int i = 0; i < n; i++)
        {
            Console.WriteLine(numbersShifted[i]);
        }
    }

    static int ReadInt()
    {
        return int.Parse(Console.ReadLine());
    }
}
