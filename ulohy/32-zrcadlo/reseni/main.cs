using System;

internal class Program
{
    static void Main(string[] args)
    {
        int w = int.Parse(Console.ReadLine());
        int h = int.Parse(Console.ReadLine());
        char direction = char.Parse(Console.ReadLine());
        Console.ReadLine();

        if (w < 1 || h < 1)
        {
            return;
        }

        char[,] paper = new char[h, w];

        for (int row = 0; row < h; row++)
        {
            for (int col = 0; col < w; col++)
            {
                paper[row, col] = char.Parse(Console.ReadLine());
            }
        }

        switch (direction)
        {
            case 'p':
                for (int row = 0; row < h; row++)
                {
                    for (int col = w - 1; col >= 0; col--)
                    {
                        Console.Write(paper[row, col]);
                    }

                    Console.WriteLine();
                }
                break;

            case 's':
                for (int row = h - 1; row >= 0; row--)
                {
                    for (int col = 0; col < w; col++)
                    {
                        Console.Write(paper[row, col]);
                    }

                    Console.WriteLine();
                }
                break;
        }
    }
}
