using System;

internal class Program
{
    static void Main(string[] args)
    {
        string text = Console.ReadLine().ToLower();
        string language = Console.ReadLine();

        if (language == "cz")
        {
            text = text.Replace("ch", "*");
        }

        text = text.Replace(" ", "");

        bool isPalindrome = true;

        int half = (int)Math.Ceiling((double)text.Length / 2);
        for (int i = 0; i < half; i++)
        {
            if (text[i] != text[text.Length - i - 1])
            {
                isPalindrome = false;
                break;
            }
        }

        Console.WriteLine(isPalindrome ? "true" : "false");
    }
}
