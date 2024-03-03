using System;

internal class Program
{
    static void Main(string[] args)
    {
        int w = int.Parse(Console.ReadLine());
        int h = int.Parse(Console.ReadLine());
        Console.ReadLine();

        if (w < 1 || h < 1)
        {
            return;
        }

        char[,] table = new char[h, w];

        for (int row = 0; row < h; row++)
        {
            for (int col = 0; col < w; col++)
            {
                table[row, col] = char.Parse(Console.ReadLine());
            }
        }

        for (int col = 0; col < w; col++)
        {
            for (int row = 0; row < h; row++)
            {
                Console.Write(table[row, col]);
            }

            Console.WriteLine();
        }
    }
}
