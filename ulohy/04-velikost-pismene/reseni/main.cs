using System;

internal class Program
{
    static void Main(string[] args)
    {
        string input = Console.ReadLine();
        char letter = char.Parse(input);

        // Totéž, jako "", konvence nařizuje použít toto, aby bylo zřejmé, že tento string má být prázdný.
        string output = string.Empty;

        // Místo čísel lze použít i přímo chary 'a' apod.
        if (letter >= 65 && letter <= 90)
        {
            output = "upper";
        }
        else if (letter >= 97 && letter <= 122)
        {
            output = "lower";
        }

        Console.WriteLine(output);
    }
}
