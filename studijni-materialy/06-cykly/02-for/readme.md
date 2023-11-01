# For

Cyklus `for` je v podstatě zkrácený zápis `while` s počítadlem. Proměnná se nemusí vytvářet nad ním, naopak je přímo jeho součástí. Stejně tak je součástí i zvyšování její hodnoty. Zápis začíná slůvkem `for` a následnými závorkami. Ty se dělí na tři části:

- vytvoření proměnné pro počítání,
- logický výraz porovnávající tuto proměnnou s jiným číslem a
- operace, která se má s proměnnou provést na konci každého průchodu.

Tyto části jsou odděleny pomocí středníků. Příklad:

```csharp
for (int i = 0; i < 3; i++)
{
    Console.WriteLine("Hello, world!");
}
```

V cyklu bude použita celočíselná proměnná `i` – to je konvenční a nejběžnejší název pro proměnnou ve `for`u. Zpočátku je nastavena na 0 – ne 1, jak by se mohlo zdát rozumnější. Důvod počítání od nuly poznáme v dalším měsíci Pardubického hackera. Cyklus se bude vykonávat, dokud bude `i` menší než 3. Po každém průchodu se zvýší o 1. Tento kód tedy vypíše zprávu třikrát.

Proměnná `for` cyklu se zachovává mezi průchody – nenastavuje se pokaždé na 0. Jakmile skončí opakování, je smazána a pod cyklem se k ní nedá přistoupit. Pro proměnnou je možné zvolit jiný datový typ, název, podmínku i způsob navyšování (nebo snižování). Velmi často se hodí hodnotu použít nejen jako počítadlo, ale také přistoupit k její hodnotě. Příklad:

```csharp
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i * 3);
}
```

Cyklus běží s `i` od 1 do 5. V každém průchodu vypíše hodnotu `i` vynásobenou 3, ve výsledku tedy prvních pět násobků trojky:

```
3
6
9
12
15
```

Další častou praktikou je také cykly do sebe zanořovat. Hodnoty jejich proměnných je pak možné různě kombinovat. Protože nelze využít stejný název uvnitř těla podruhé, proměnná zanořeného cyklu je většinou pojmenována `j`. Příklad:

```csharp
for (int i = 0; i < 3; i++)
{
    for (int j = 0; j < 3; j++)
    {
        Console.Write("i: ");
        Console.Write(i);
        Console.Write(", ");
        Console.Write("j: ");
        Console.WriteLine(j);
    }
}
```

V každém opakování `for` cyklu s `i` se zároveň provedou všechny tři průchody zanořeného `for` cyklu s `j`. Výstup:

```
i: 0, j: 0
i: 0, j: 1
i: 0, j: 2
i: 1, j: 0
i: 1, j: 1
i: 1, j: 2
i: 2, j: 0
i: 2, j: 1
i: 2, j: 2
```

Tento program není příliš zajímavý. Použití různých matematických operací mezi `i` a `j`, případně zapojení dalších podmínek však skýtá skutečně širokou škálu využití.

Pozn.: Zápis `for` v Pythonu je poměrně odlišný a kombinuje se s `range`. Přesnou syntaxi necháme na vašem dohledání.