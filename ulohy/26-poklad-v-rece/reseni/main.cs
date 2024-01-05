using System;

internal class Program
{
    static void Main(string[] args)
    {
        int n = ReadInt();
        Console.ReadLine();

        string[] cityNames = new string[n];
        int[] cityLocations = new int[n];

        for (int i = 0; i < n; i++)
        {
            string name = Console.ReadLine();
            int distance = ReadInt();

            cityNames[i] = name;
            cityLocations[i] = distance;
        }

        Console.ReadLine();

        int chestLocation = ReadInt();

        SortByDistance(cityNames, cityLocations, chestLocation);

        for (int i = 0; i < n; i++)
        {
            Console.WriteLine(cityNames[i]);
        }
    }

    static void SortByDistance(string[] cityNames, int[] cityLocations, int chestLocation)
    {
        bool swapped = true;

        while (swapped)
        {
            swapped = false;

            for (int i = 0; i < cityLocations.Length - 1; i++)
            {
                int distance1 = Math.Abs(chestLocation - cityLocations[i]);
                int distance2 = Math.Abs(chestLocation - cityLocations[i + 1]);

                if (distance1 < distance2 || (distance1 == distance2 && cityLocations[i] < cityLocations[i + 1]))
                {
                    continue;
                }

                int tempLocation = cityLocations[i];
                cityLocations[i] = cityLocations[i + 1];
                cityLocations[i + 1] = tempLocation;

                string tempName = cityNames[i];
                cityNames[i] = cityNames[i + 1];
                cityNames[i + 1] = tempName;

                swapped = true;
            }
        }
    }

    static int ReadInt()
    {
        return int.Parse(Console.ReadLine());
    }
}
