using System;

internal class Program
{
    const int NoneId = 0;
    const int BirdId = 1;
    const int SpeakerId = 2;

    static void Main(string[] args)
    {
        int d = ReadInt() + 1;
        int[] wireItems = new int[d];

        int p = ReadInt();
        Console.ReadLine();
        for (int i = 0; i < p; i++)
        {
            wireItems[ReadInt()] = BirdId;
        }

        Console.ReadLine();

        int s = ReadInt();
        Console.ReadLine();

        int[] speakerVolumes = new int[d];
        int[] speakerTones = new int[d];

        for (int i = 0; i < s; i++)
        {
            int position = ReadInt();

            speakerVolumes[position] = ReadInt();
            speakerTones[position] = ReadInt();

            wireItems[position] = SpeakerId;

            Console.ReadLine();
        }

        int z = ReadInt();
        Console.ReadLine();
        for (int i = 0; i < z; i++)
        {
            int speakerPosition = ReadInt();
            PlaySpeaker(wireItems, speakerPosition, speakerVolumes[speakerPosition], speakerTones[speakerPosition]);
        }

        PrintWireItems(wireItems);
    }

    static void PlaySpeaker(int[] wireItems, int position, int volume, int tone)
    {
        if (volume < 1 || tone < 1)
        {
            return;
        }

        int leftEdge = Math.Max(0, position - volume);
        for (int i = leftEdge; i < position; i++)
        {
            if (wireItems[i] != BirdId)
            {
                continue;
            }

            int newIndex = i - tone;
            if (newIndex >= 0 && wireItems[newIndex] == NoneId)
            {
                wireItems[newIndex] = wireItems[i];
            }

            wireItems[i] = NoneId;
        }

        int rightEdge = Math.Min(wireItems.Length - 1, position + volume);
        for (int i = rightEdge; i > position; i--)
        {
            if (wireItems[i] != BirdId)
            {
                continue;
            }

            int newIndex = i + tone;
            if (newIndex < wireItems.Length && wireItems[newIndex] == NoneId)
            {
                wireItems[newIndex] = wireItems[i];
            }

            wireItems[i] = NoneId;
        }
    }

    static void PrintWireItems(int[] wireItems)
    {
        foreach (int item in wireItems)
        {
            char c = '-';
            switch (item)
            {
                case BirdId:
                    c = 'O';
                    break;

                case SpeakerId:
                    c = '|';
                    break;
            }

            Console.Write(c);
        }

        Console.WriteLine();
    }

    static int ReadInt()
    {
        return int.Parse(Console.ReadLine());
    }
}
