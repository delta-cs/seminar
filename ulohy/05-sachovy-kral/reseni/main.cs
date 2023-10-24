using System;

internal class Program
{
    static void Main(string[] args)
    {
        bool check = Console.ReadLine() == "check";
        bool canMove = Console.ReadLine() == "can move";

        string result;

        if (canMove)
        {
            if (check)
            {
                result = "check";
            }
            else
            {
                result = "continuing";
            }
        }
        else
        {
            if (check)
            {
                result = "check";
            }
            else
            {
                result = "stale";
            }

            result += "mate";
        }

        Console.WriteLine(result);
    }
}