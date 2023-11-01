# Break a continue

Při práci s cykly mohou přijít vhod dvě klíčová slova. Dají se využít výhradně uvnitř jejich těl. Když vykonávání programu narazí na `break`, ukončí celý cyklus a pokračuje dál pod cyklem. Stejně, jako kdyby tělo skončilo a podmínka pro pokračování nebyla splněna. Příklad

```csharp
for (int i = 0; i < 6; i++)
{
    if (i == 3)
    {
        break;
    }

		Console.WriteLine(i);
}

Console.WriteLine("The end.");
```

Jakmile `i` v cyklu dosáhne 3, cyklus se ukončí a vypíše se zpráva. Výstup:

```
0
1
2
The end.
```

Naopak v místě použití `continue` dojde k ukončení pouze aktuálního průchodu. Je to opět, jako by tělo skončilo, ale tentokrát se podmínka normálně zkontroluje. Cyklus tedy může pokračovat dál, je-li splněna. Příklad:

```csharp
for (int i = 0; i < 6; i++)
{
    if (i == 3)
    {
        continue;
    }

		Console.WriteLine(i);
}

Console.WriteLine("The end.");
```

Když se `i` bude rovnat 3, aktuální průchod nedoběhne do konce těla a hodnota `i` se nevypíše. Pak ale program pokračuje standardně a jelikož výraz `i < 6` je stále `true`, dochází k dalším opakováním. V těch už `continue` nenastane a cyklus skončí běžným způsobem. Ve výsledku je ve výstupu 3 pouze vynecháno:

```
0
1
2
4
5
The end.
```

Tato klíčová slova jsou často využita ve spojení s jinak nekonečnými cykly. Příklad:

```csharp
while (true)
{
    Console.WriteLine("Enter a number to multiply by 2 (negative to exit): ");
    int input = int.Parse(Console.ReadLine());

    if (input < 0)
    {
        break;
    }

    Console.Write("Result: ");
    Console.WriteLine(input * 2);
}
```

`while` s výrazem `true` by normálně nikdy neskončil (`true` bude vždy platit). Jenže při zadání záporného čísla je ukončen právě slůvkem `break`. Při zadání jiného čísla se vypíše jeho dvojnásobek.