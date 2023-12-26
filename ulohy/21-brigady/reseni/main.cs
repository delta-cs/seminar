using System;

internal class Program
{
    static void Main(string[] args)
    {
        int m = ReadInt();
        Console.ReadLine();

        int[] hoursWorked = new int[m];
        for (int i = 0; i < m; i++)
        {
            hoursWorked[i] = ReadInt();
        }

        Console.ReadLine();

        int salary = 0;
        for (int i = 0; i < m; i++)
        {
            int hourlyRate = ReadInt();
            salary += hoursWorked[i] * hourlyRate;
        }

        Console.WriteLine(salary);
    }

    static int ReadInt()
    {
        return int.Parse(Console.ReadLine());
    }
}
