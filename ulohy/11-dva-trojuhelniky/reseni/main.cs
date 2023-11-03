using System;

internal class Program
{
    static void Main(string[] args)
    {
        double a = ReadDouble();
        double b = ReadDouble();
        double c = ReadDouble();
        double k = ReadDouble();
        double l = ReadDouble();
        double m = ReadDouble();

        Console.WriteLine(Solve(a, b, c, k, l, m));
    }

    static string Solve(double a, double b, double c, double k, double l, double m)
    {
        if (!IsValid(a, b, c) || !IsValid(k, l, m))
            return "invalid";

        if (AreCongruent(a, b, c, k, l, m))
            return "congruent";

        if (AreSimilar(a, b, c, k, l, m))
            return "similar";

        return "different";
    }

    static bool IsValid(double a, double b, double c)
    {
        double longestSide = Math.Max(a, Math.Max(b, c));
        return longestSide < a + b + c - longestSide;
    }

    static bool AreCongruent(double a, double b, double c, double k, double l, double m)
    {
        return (a == k && ((b == l && c == m) || (b == m && c == l)))
               || (a == l && ((b == k && c == m) || (b == m && c == k)))
               || (a == m && ((b == k && c == l) || (b == l && c == k)));
    }

    static bool AreSimilar(double a, double b, double c, double k, double l, double m)
    {
        double ratio = a / k;
        if ((b / l == ratio && c / m == ratio) || (c / l == ratio && b / m == ratio))
            return true;

        ratio = b / k;
        if ((a / l == ratio && c / m == ratio) || (c / l == ratio && a / m == ratio))
            return true;

        ratio = c / k;
        if ((a / l == ratio && b / m == ratio) || (b / l == ratio && a / m == ratio))
            return true;

        return false;
    }

    static double ReadDouble()
    {
        return double.Parse(Console.ReadLine());
    }
}