using System;

internal class Program
{
    static void Main(string[] args)
    {
        int w = ReadInt();
        int h = ReadInt();
        int n = ReadInt();
        Console.ReadLine();

        bool[,] grid = new bool[w, h];

        for (int i = 0; i < n; i++)
        {
            int x = ReadInt();
            int y = ReadInt();
            int a = ReadInt();
            int b = ReadInt();
            Console.ReadLine();

            for (int col = x - 1; col < x + a - 1; col++)
            {
                for (int row = y - 1; row < y + b - 1; row++)
                {
                    grid[col, row] = true;
                }
            }
        }

        for (int row = 0; row < h; row++)
        {
            for (int col = 0; col < w; col++)
            {
                Console.Write(grid[col, row] ? '#' : '.');
            }

            Console.WriteLine();
        }
    }

    static int ReadInt()
    {
        return int.Parse(Console.ReadLine());
    }
}
