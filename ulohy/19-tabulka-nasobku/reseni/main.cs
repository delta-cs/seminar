using System;

internal class Program
{
    static void Main(string[] args)
    {
        int cols = int.Parse(Console.ReadLine());
        int rows = int.Parse(Console.ReadLine());

        PrintMultiplicationTable(rows, cols);
    }

    static void PrintMultiplicationTable(int rows, int cols)
    {
        int tableWidth = 1;
        for (int col = 1; col <= cols; col++)
        {
            tableWidth += CountDigits(col * rows) + 3;
        }

        PrintHorizontalLine(tableWidth);

        for (int row = 1; row <= rows; row++)
        {
            Console.Write('|');

            for (int col = 1; col <= cols; col++)
            {
                int result = row * col;

                int columnWidth = CountDigits(col * rows);
                for (int pad = 0; pad <= columnWidth - CountDigits(result); pad++)
                {
                    Console.Write(' ');
                }

                Console.Write(result);
                Console.Write(" |");
            }

            Console.WriteLine();
            PrintHorizontalLine(tableWidth);
        }
    }

    static int CountDigits(int number)
    {
        int count = 0;

        while (number > 0)
        {
            number /= 10;
            count++;
        }

        return count;
    }

    static void PrintHorizontalLine(int width)
    {
        for (int i = 0; i < width; i++)
        {
            Console.Write('-');
        }

        Console.WriteLine();
    }
}
