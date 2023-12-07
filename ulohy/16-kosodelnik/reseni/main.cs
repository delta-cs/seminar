using System;

internal class Program
{
    static void Main(string[] args)
    {
        int side = int.Parse(Console.ReadLine());
        int height = int.Parse(Console.ReadLine());

        PrintRhomboid(side, height);
    }

    static void PrintRhomboid(int side, int height)
    {
        for (int i = 0; i < height; i++)
        {
            for (int j = 0; j < height - i - 1; j++)
            {
                Console.Write(' ');
            }

            for (int j = 0; j < side; j++)
            {
                char output = i > 0 && i < height - 1 && j > 0 && j < side - 1 ? ' ' : '#';
                Console.Write(output);
            }

            Console.WriteLine();
        }
    }
}
