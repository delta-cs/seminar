using System;

internal class Program
{
    static void Main(string[] args)
    {
        int l = ReadInt();
        Console.ReadLine();
        int j = ReadInt();
        Console.ReadLine();

        int[] availableJumps = new int[j];
        for (int i = 0; i < j; i++)
        {
            availableJumps[i] = ReadInt();
        }

        long[] memo = new long[l + 1];

        memo[l] = 1;

        for (int i = memo.Length - 2; i >= 0; i--)
        {
            memo[i] = NumberOfWays(l, i, availableJumps, memo);
        }

        Console.WriteLine(memo[0]);
    }

    static long NumberOfWays(int target, int currentPosition, int[] availableJumps, long[] memo)
    {
        long sum = 0;

        foreach (int availableJump in availableJumps)
        {
            int nextPosition = currentPosition + availableJump;

            if (nextPosition > target)
            {
                continue;
            }

            sum += memo[nextPosition];
        }

        return sum;
    }

    static int ReadInt()
    {
        return int.Parse(Console.ReadLine());
    }
}
