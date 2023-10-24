using System;

internal class Program
{
    static void Main(string[] args)
    {
        int hours = int.Parse(Console.ReadLine());
        int minutes = int.Parse(Console.ReadLine());

        int minutesTotal = hours * 60 + minutes;

        string activity = "none";

        if (minutesTotal < 6 * 60 || minutesTotal >= 21 * 60)
            activity = "sleep";
        else if (minutesTotal < 7 * 60)
            activity = "breakfast";
        else if (minutesTotal < 9 * 60 + 15)
        {
            if (minutesTotal >= 7 * 60 + 30)
                activity = "programming";
        }
        else if (minutesTotal < 11 * 60 + 30)
        {
            activity = "cycling";
        }
        else if (minutesTotal < 12 * 60 + 20)
        {
            if (minutesTotal >= 11 * 60 + 45)
                activity = "lunch";
        }
        else if (minutesTotal < 13 * 60 + 5)
        {
            activity = "listening to music";
        }
        else if (minutesTotal < 14 * 60 + 35)
        {
            activity = "school club";
        }
        else if (minutesTotal < 16 * 60 + 40)
        {
            activity = "programming";
        }
        else if (minutesTotal < 18 * 60 + 45)
        {
            if (minutesTotal >= 18 * 60 + 5)
                activity = "dinner";
        }
        else if (minutesTotal < 19 * 60 + 10)
        {
            activity = "watching TV";
        }
        else if (minutesTotal < 19 * 60 + 25)
        {
            activity = "shower";
        }
        else if (minutesTotal >= 19 * 60 + 35)
        {
            activity = "reading";
        }

        Console.WriteLine(activity);
    }
}