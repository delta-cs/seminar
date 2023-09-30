# Switch

Pro případy, ve kterých by vznikla sekvence podmínek a všechny se týkaly jedné proměnné, např. (jazyk C#):

```csharp
int numberOfStripes = 5;

if (numberOfStripes == 0)
{
    Console.WriteLine("dog");
}
else if (numberOfStripes == 1)
{
    Console.WriteLine("skunk");
}
else if (numberOfStripes == 10)
{
    Console.WriteLine("marlin");
}
else if (numberOfStripes == 15)
{
    Console.WriteLine("zebra");
}
else
{
    Console.WriteLine("an unknown animal");
}
```

vznikl kontrukt `switch` (anglicky *přepínač*). Za ním následuje proměnná, kterou testuje, a poté série
slov `case` (*případ*), každý se svou hodnotou. Odpovídá-li proměnná dané hodnotě, provede se kód v
příslušném `case`. Ten je vždy zakončen `break` (*zlomit, ukončit*). Jako poslední je možné uvést místo `case`
slovo `default` (*výchozí*), jehož tělo se provede, nenastal-li žádný předchozí `case`.

```csharp
int numberOfStripes = 5;

switch (numberOfStripes)
{
    case 0:
        Console.WriteLine("dog");
        break;
    case 1:
        Console.WriteLine("skunk");
        break;
    case 10:
        Console.WriteLine("marlin");
        break;
    case 15:
        Console.WriteLine("zebra");
        break;
    default:
        Console.WriteLine("an unknown animal");
        break;
}
```

`switch` má různou syntaxi a v některých jazycích i vícero možných. Doplnění znalostí necháváme na vás.
