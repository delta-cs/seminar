using System;

internal class Program
{
    static void Main(string[] args)
    {
        int b = ReadInt();
        int r = ReadInt();
        double t = ReadDouble();
        int c = ReadInt();

        int result = 0;

        switch (c)
        {
            case 1:
                int r2 = ReadInt();
                result = SolveBoxes(b, r, r2);
                break;

            case 2:
                double t2 = ReadDouble();
                result = SolveRobots(r, t, t2);
                break;
        }

        Console.WriteLine(result);
    }

    static int ReadInt()
    {
        return int.Parse(Console.ReadLine());
    }

    static double ReadDouble()
    {
        return double.Parse(Console.ReadLine());
    }

    static int SolveBoxes(int b, int r, int r2)
    {
        return b * r2 / r;
    }

    static int SolveRobots(int r, double t, double t2)
    {
        return (int)Math.Ceiling(r * t / t2);
    }
}
