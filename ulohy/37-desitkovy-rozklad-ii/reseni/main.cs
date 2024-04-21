using System;

internal class Program
{
    static void Main(string[] args)
    {
        string number = Console.ReadLine();
        int decimalDotIndex = number.IndexOf('.');

        if (decimalDotIndex == -1)
        {
            decimalDotIndex = number.Length;
        }

        for (int i = 0; i < decimalDotIndex; i++)
        {
            char multiple = number[i];

            if (multiple == '0')
            {
                continue;
            }

            Console.Write($"{multiple} x 1");
            for (int j = 0; j < decimalDotIndex - i - 1; j++)
            {
                Console.Write('0');
            }

            Console.WriteLine();
        }

        for (int i = decimalDotIndex + 1; i < number.Length; i++)
        {
            char multiple = number[i];

            if (multiple == '0')
            {
                continue;
            }

            Console.Write($"{multiple} x 0.");
            for (int j = 0; j < i - decimalDotIndex - 1; j++)
            {
                Console.Write('0');
            }

            Console.WriteLine('1');
        }
    }
}
