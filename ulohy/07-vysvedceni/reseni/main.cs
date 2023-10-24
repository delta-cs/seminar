using System;

internal class Program
{
    static void Main(string[] args)
    {
        int mark = int.Parse(Console.ReadLine());
        bool attendedContests = Console.ReadLine() == "attended";
        double absencePercentage = double.Parse(Console.ReadLine());
        bool isPolite = Console.ReadLine() == "polite";

        // Dá se zkrátit na `bool passed = <podmínka>`.
        bool passed = false;
        if (mark < 5 && (absencePercentage <= 20 || attendedContests || (mark == 1 && isPolite)))
        {
            passed = true;
        }

        // Použití ternárního operátoru.
        Console.WriteLine(passed ? "passed" : "failed");
    }
}