using System;

internal class Program
{
    static void Main(string[] args)
    {
        double boxVolume = double.Parse(Console.ReadLine());
        Console.ReadLine();

        double totalObjectsVolume = 0;

        double currentObjectVolume = 0;

        do
        {
            totalObjectsVolume += currentObjectVolume;
            currentObjectVolume = double.Parse(Console.ReadLine());
        } while (totalObjectsVolume + currentObjectVolume <= boxVolume && currentObjectVolume != -1);

        Console.WriteLine(totalObjectsVolume);
    }
}