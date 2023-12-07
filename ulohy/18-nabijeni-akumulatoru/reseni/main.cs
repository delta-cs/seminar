using System;

internal class Program
{
    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());
        Console.ReadLine();

        bool charging = false;
        bool discharging = false;

        double lastChargeLevel = 0;

        for (int i = 0; i < n; i++)
        {
            double chargeLevel = double.Parse(Console.ReadLine());

            if (i > 0)
            {
                if (chargeLevel > lastChargeLevel)
                {
                    charging = true;
                }
                else if (chargeLevel < lastChargeLevel)
                {
                    discharging = true;
                }
            }

            lastChargeLevel = chargeLevel;
        }

        string output = "unused";

        if (charging)
        {
            if (discharging)
            {
                output = "both";
            }
            else
            {
                output = "charging";
            }
        }
        else if (discharging)
        {
            output = "discharging";
        }

        Console.WriteLine(output);
    }
}
