using System;

internal class Program
{
    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());

        if (n < 1)
        {
            return;
        }

        string[] names = new string[n];
        double[] scores = new double[n];

        double sum = 0;

        for (int i = 0; i < n; i++)
        {
            Console.ReadLine();
            names[i] = Console.ReadLine();
            scores[i] = double.Parse(Console.ReadLine());
            sum += scores[i];
        }

        double average = sum / n;

        for (int i = 0; i < n; i++)
        {
            if (scores[i] >= average)
            {
                Console.WriteLine(names[i]);
            }
        }
    }
}
