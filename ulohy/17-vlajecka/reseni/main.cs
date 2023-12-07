using System;

internal class Program
{
    static void Main(string[] args)
    {
        int p = ReadInt();
        int f = ReadInt();
        int h = ReadInt();

        PrintFlag(p, f, h);
    }

    static void PrintFlag(int poleLength, int flagWidth, int heightAboveGround)
    {
        int flagHeight = flagWidth * 2 - 1;

        if (flagHeight + heightAboveGround > poleLength)
        {
            Console.WriteLine("invalid");
            return;
        }

        for (int i = 0; i < poleLength - flagHeight - heightAboveGround; i++)
        {
            Console.WriteLine('|');
        }

        for (int i = 1; i <= flagWidth; i++)
        {
            for (int j = 1; j <= i; j++)
            {
                Console.Write('#');
            }
            Console.WriteLine();
        }

        for (int i = flagWidth - 1; i >= 1; i--)
        {
            for (int j = 1; j <= i; j++)
            {
                Console.Write('#');
            }
            Console.WriteLine();
        }

        for (int i = 0; i < heightAboveGround; i++)
        {
            Console.WriteLine('|');
        }
    }

    static int ReadInt()
    {
        return int.Parse(Console.ReadLine());
    }
}
