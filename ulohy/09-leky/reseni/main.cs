using System;

internal class Program
{
    static void Main(string[] args)
    {
        int hours = int.Parse(Console.ReadLine());
        int minutes = int.Parse(Console.ReadLine());

        int minutesTotal = hours * 60 + minutes;

        int startWhite = 6 * 60;
        int endWhite = 21 * 60;
        int intervalWhite = 3 * 60;

        int startRed = 8 * 60;
        int endRed = 22 * 60;
        int intervalRed = 2 * 60;

        int startYellow = 12 * 60 + 45;
        int endYellow = 22 * 60 + 30;
        int intervalYellow = 45;

        bool takeWhite, takeRed, takeYellow;
        takeWhite = takeRed = takeYellow = false;

        // Dá se zkrátit na `bool takeWhite = <podmínka>`.
        if (minutesTotal >= startWhite && minutesTotal <= endWhite && (minutesTotal - startWhite) % intervalWhite == 0)
            takeWhite = true;

        if (minutesTotal >= startRed && minutesTotal <= endRed && (minutesTotal - startRed) % intervalRed == 0)
            takeRed = true;

        if (minutesTotal >= startYellow && minutesTotal <= endYellow && (minutesTotal - startYellow) % intervalYellow == 0)
            takeYellow = true;

        if (takeWhite)
            Console.WriteLine("white");

        if (takeRed)
            Console.WriteLine("red");

        if (takeYellow)
            Console.WriteLine("yellow");
    }
}
