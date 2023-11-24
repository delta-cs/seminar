using System;

internal class Program
{
    static void Main(string[] args)
    {
        int number = int.Parse(Console.ReadLine());

        PrintDecomposition(number);
    }

    static void PrintDecomposition(int number)
    {
        int size = 0;
        int temp = number;
        while (temp >= 10)
        {
            temp /= 10;
            size++;
        }

        while (number > 0)
        {
            int power = (int)Math.Pow(10, size);
            int multiple = number / power;

            if (multiple != 0)
            {
                Console.WriteLine($"{multiple} x {power}");
            }

            // Neboli `number = number % power`.
            number %= power;
            size--;
        }
    }
}