using System;

internal class Program
{
    static void Main(string[] args)
    {
        int n = ReadInt();
        Console.ReadLine();

        string[] activityNames = new string[n];
        int[] activityStartTimes = new int[n];
        int[] activityEndTimes = new int[n];

        for (int i = 0; i < n; i++)
        {
            activityNames[i] = Console.ReadLine();

            activityStartTimes[i] = ReadTime();
            activityEndTimes[i] = ReadTime();

            Console.ReadLine();
        }

        int currentTime = ReadTime();

        bool activityFound = false;
        for (int i = 0; i < n; i++)
        {
            int startTime = activityStartTimes[i];
            int endTime = activityEndTimes[i];

            if (currentTime >= startTime && currentTime <= endTime
                || (startTime > endTime && (currentTime >= startTime || currentTime <= endTime)))
            {
                activityFound = true;
                Console.WriteLine(activityNames[i]);
                break;
            }
        }

        if (!activityFound)
        {
            Console.WriteLine("none");
        }
    }

    static int ReadInt()
    {
        return int.Parse(Console.ReadLine());
    }

    static int ReadTime()
    {
        int hours = ReadInt();
        int minutes = ReadInt();
        return hours * 60 + minutes;
    }
}
