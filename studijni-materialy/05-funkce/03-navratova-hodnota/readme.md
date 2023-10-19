# Návratová hodnota

V mnoha případech by se hodilo po zavolání funkce znát, k jakému výsledku došla. Tedy aby bylo nějakým způsobem možné hodnotu zevnitř funkce **dostat zpět** do kódu, který ji zavolal. Přesně k tomu slouží takzvaná návratová hodnota funkce. V typovaných jazycích (C, C++, C# a Java) je nutné upravit definici funkce, která má nějakou hodnotu vracet. Místo slůvka `void` se na začátku určí datový typ návratové hodnoty. Tato specifikace je v JavaScriptu nemožná a v Pythonu nepovinná (syntaxe je také odlišná).

Poté je nutné v těle funkce nějakou hodnotu takzvaně **vrátit**. K tomu je určeno klíčové slovo `return` následované hodnotou (nebo proměnnou), která má být vrácena. V kódu, který funkci volá, se dá hodnota např. uložit do proměnné standardní syntaxí, ve které po `=` následuje volání funkce. Příklad:

```csharp
int result = Sum(5, 10);
Console.WriteLine(result);

int Sum(int a, int b)
{
    int sum = a + b;
    return sum;
}
```

Funkce `Sum` (*sečíst*) přijímá dvě celá čísla a vrací celé číslo. Parametry sečte do proměnné a nakonec vrátí její hodnotu. Je volána s parametry 5 a 10. Po tom, co skončí její vykonávání, proměnná `sum` je odstraněna, ale její hodnota je vrácena. Ta je poté uložena do proměnné `result`, která se nakonec vypisuje. Výstupem bude 15.

Kromě uložení do proměnné je možné návratovou hodnotu z funkce rovnou použít v parametru funkce druhé. `WriteLine` je funkce, která přijímá hodnotu, jež má být vypsána na výstup. A tak jí do parametru lze rovnou vložit tu vrácenou ze `Sum`:

```csharp
Console.WriteLine(Sum(5, 10));
```

Tento kód bude fungovat totožně, jako předchozí příklad.

`return` vždy **ukončí** vykonávání funkce. Je možné ho použít i ve funkci, která žádnou hodnotu nevrací. Příklad:

```csharp
ReportProblem();
Console.WriteLine("This is Houston. Say again, please.");

void ReportProblem()
{
    Console.WriteLine("Okay, Houston, we've had a problem here.");
    return;
    Console.WriteLine("Houston?");
}
```

Program volá funkci, která vypíše první řádek textu. Poté ale přichází `return` – vykonávání končí a program se vrací do hlavního kódu. Tam vypíše ještě jeden řádek. Celkový výstup je tudíž

```
Okay, Houston, we've had a problem here.
This is Houston. Say again, please.
```

Je zřejmé, že kód funkce nedává smysl – druhý text nikdy nevypíše a poslední dva řádky se v ní tak vůbec nemusí nacházet. Předčasné ukončení funkce však má své využití, je-li umístěno v podmínce. Pokud je splněna, funkce se ukončí, popřípadě nějakou hodnotu vrátí. Pokud není splněna, stane se něco jiného. Je ale potřeba dát pozor, aby funkce, která má něco vracet, skutečně vždy vracela. Příklad:

```csharp
int result = Sum(5, 10);
Console.WriteLine(result);

int Sum(int a, int b)
{
    int sum = a + b;

    if (sum > 20)
    {
        return sum;
    }

    // Chyba - zde není zaručeno vrácení hodnoty.
}
```

Funkce vrací součet dvou čísel, ale jen pokud je vyšší než 20. Tento program nebude možné ani spustit, protože kód, který funkci volá, spoléhá na to, že nějaká hodnota bude vždy (ne jen někdy) vrácena.

