using System;

internal class Program
{
    static void Main(string[] args)
    {
        double diameter = ReadDouble();
        double centerX = ReadDouble();
        double centerY = ReadDouble();
        double pointX = ReadDouble();
        double pointY = ReadDouble();

        bool liesInside = LiesInside(diameter / 2, centerX, centerY, pointX, pointY);

        Console.WriteLine(liesInside ? "inside" : "outside");
    }

    static bool LiesInside(double radius, double centerX, double centerY, double pointX, double pointY)
    {
        double a = Math.Abs(centerX - pointX);
        double b = Math.Abs(centerY - pointY);
        double c = Math.Sqrt(Math.Pow(a, 2) + Math.Pow(b, 2));

        return c <= radius;
    }

    static double ReadDouble()
    {
        return double.Parse(Console.ReadLine());
    }
}
