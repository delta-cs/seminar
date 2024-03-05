using System;

internal class Program
{
    const int BrickWidth = 11;
    const int BrickHeight = 4;

    static void Main(string[] args)
    {
        int h = int.Parse(Console.ReadLine());
        int w = int.Parse(Console.ReadLine());

        bool battlementsEnabled = w >= 5;

        for (int i = 0; i < h; i++)
        {
            bool firstRow = i == 0;
            bool fullRow = h % 2 == 0 ? i % 2 == 1 : i % 2 == 0;

            int padding = 0;

            // --- výpočet odsazení této řady cihel zleva
            if (firstRow)
            {
                if (battlementsEnabled)
                {
                    padding = fullRow ? BrickWidth - 1 : BrickWidth / 2;
                }
                else if (!fullRow)
                {
                    padding = BrickWidth / 2;
                }
            }
            else if (i == 1 && battlementsEnabled && !fullRow)
            {
                padding = BrickWidth / 2;
            }
            // ---

            // výpis vypočteného odsazení
            for (int j = 0; j < padding; j++)
            {
                Console.Write(' ');
            }

            // --- výpis vrchních hran cihel
            if (battlementsEnabled && firstRow)
            {
                int bricksCount = (fullRow ? w - 1 : w) / 2;

                // řada cihel je přerušovaná
                for (int j = 0; j < bricksCount; j++)
                {
                    for (int k = 0; k < BrickWidth; k++)
                    {
                        Console.Write('#');
                    }

                    if (j != bricksCount - 1)
                    {
                        for (int k = 0; k < BrickWidth - 2; k++)
                        {
                            Console.Write(' ');
                        }
                    }
                }
            }
            else
            {
                // řada cihel je plná
                for (int j = 0;
                     j < (!fullRow && (firstRow || (i == 1 && battlementsEnabled)) ? w - 1 : w) * (BrickWidth - 1) + 1;
                     j++)
                {
                    Console.Write('#');
                }
            }
            // ---

            Console.WriteLine();

            // --- výpis bočních hran cihel
            for (int j = 0; j < BrickHeight - 2; j++)
            {
                padding = 0;

                if (battlementsEnabled && firstRow)
                {
                    padding = fullRow ? BrickWidth - 1 : BrickWidth / 2;
                }
                else if (!fullRow)
                {
                    padding = BrickWidth / 2;
                }

                for (int k = 0; k < padding; k++)
                {
                    Console.Write(' ');
                }

                int linesCount;

                if (battlementsEnabled && firstRow)
                {
                    if (fullRow)
                    {
                        // zajištění, že poslední cihla cimbuří nebude přepadávat
                        linesCount = w % 2 == 0 ? w - 3 : w - 2;
                    }
                    else
                    {
                        linesCount = w % 2 == 0 ? w - 1 : w - 2;
                    }
                }
                else
                {
                    linesCount = fullRow ? w : w - 1;
                }

                // výpis první hrany
                Console.Write('#');
                // výpis zbylých hran
                for (int k = 0; k < linesCount; k++)
                {
                    for (int l = 0; l < BrickWidth - 2; l++)
                    {
                        Console.Write(' ');
                    }

                    Console.Write('#');
                }

                Console.WriteLine();
            }
            // ---
        }

        // výpis spodních hran cihel
        for (int j = 0; j < w * (BrickWidth - 1) + 1; j++)
        {
            Console.Write('#');
        }

        Console.WriteLine();
    }
}
