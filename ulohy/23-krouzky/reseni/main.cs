using System;

internal class Program
{
    static void Main(string[] args)
    {
        int m = int.Parse(Console.ReadLine());
        Console.ReadLine();

        string[] mathClubMembers = new string[m];
        for (int i = 0; i < m; i++)
        {
            mathClubMembers[i] = Console.ReadLine();
        }

        Console.ReadLine();

        int b = int.Parse(Console.ReadLine());
        Console.ReadLine();

        string[] biologyClubMembers = new string[m];
        for (int i = 0; i < m; i++)
        {
            biologyClubMembers[i] = Console.ReadLine();
        }

        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < b; j++)
            {
                if (mathClubMembers[i] == biologyClubMembers[j])
                {
                    Console.WriteLine(mathClubMembers[i]);
                }
            }
        }
    }
}
