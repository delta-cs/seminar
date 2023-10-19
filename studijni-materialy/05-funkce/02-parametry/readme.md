# Parametry

Možná vás napadá, proč se v definici a při volání funkce píší ony závroky na konci. Funkce totiž mohou přijímat takzvané parametry. Jsou to proměnné, které funkce **obdrží zvenčí** od kódu, který ji zavolal. V definici funkce se umisťují právě mezi konečné závorky. Jejich syntaxe je stejná jako syntaxe proměnných, ale nepřiřazuje se jim žádná hodnota (nepoužívá se `=`). Příklad:

```csharp
void PrintNumber(int number)
{
    Console.WriteLine(number);
}
```

Funkce `PrintNumber` (*vypiš číslo*) má ve své definici – takzvaně **přijímá** – parametr `number`. O přiřazení jeho hodnoty se funkce nestará. Ta přijde zvenčí – vyplní ji ten, kdo funkci volá. Kdykoli má být funkce zavolána, **musí** volající kód **uvést hodnotu**, kterou bude parametr `number` mít. S tímto parametrem potom funkce pracuje jako se standardní proměnnou. V tomto případě jeho hodnotu prostě vypíše na výstup.

Při volání funkce se její parametry opět vkládají do závorek. Tentokrát se píší už pouze hodnoty, které mají parametry ve funkci mít. Příklad:

```csharp
PrintNumber(5);

void PrintNumber(int number)
{
    Console.WriteLine(number);
}
```

Voláme `PrintNumber` s parametrem `number` nastaveným na hodnotu 5. Při vykonávání program vejde do funkce, v níž se proměnná `number` nyní rovná 5. Tuto hodnotu funkce vypíše. Funkce se tedy **nechová vždy úplně stejně** (nevypisuje vždy totéž), ale záleží na hodnotě, která je jí předána.

Hodnota předaná do funkce může samozřejmě být také dosazena z proměnné. Stejného výsledku bychom tedy dosáhli i takto:

```csharp
int number = 5;
PrintNumber(number);
```

Funkce může hodnotu parametrů uvnitř svého těla změnit, hodí-li se to. Stejně jako u nových proměnných vytvořených ve funkci, ani parametry nijak nemění původní proměnné, které byly dosazeny.

```csharp
int number = 5;

AddOneAndPrint(number);

Console.WriteLine(number);

void AddTwoAndPrint(int number)
{
    number += 2;
    Console.WriteLine(number);
}
```

Funkce přijímá číslo, ke kterému přičte 2 a vypíše jej. Předáváme jí `number`, která má hodnotu 5. Funkce se zavolá a upraví parametr přičtením 2. To nijak nemění původní proměnnou. Po doběhnutí funkce je její vnitřní `number` odstraněna a program pokračuje. Nakonec se vypíše hodnota původní proměnné `number`. Výstupem je tedy

```
7
5
```

Parametrů může funkce přijímat i více. V definici i při volání se pak oddělují čárkou. Příklad:

```csharp
PrintDifference(8, 5);

void PrintDifference(int a, int b)
{
    int sum = a - b;
    Console.WriteLine(sum);
}
```

`PrintDifference` (*vypsat rozdíl*) přijímá čísla `a` a `b`. Vypočte jejich rozdíl a následně jej vypíše. Hodnoty parametrů se ve volání musí uvést **v pořadí**, v jakém jsou parametry definovány – první je `a` a jeho hodnota bude tedy 8, `b` bude 5. Program vypíše výsledek 8 - 5, tedy 3. Na pořadí parametrů záleží – budou-li uvedeny opačně, výstup bude odlišný:

```csharp
PrintDifference(5, 8);
```

Program by vypsal výsledek 5 - 8, čili -3. Mohou ale být i takové funkce, u kterých na pořadí parametrů nezáleží. Například kdyby se parametry neodčítaly, nýbrž sčítaly.

Pozn.: Občas bývají různě zaměňovány názvy parametr a argument. Je mezi nimi však rozdíl. Parametr je proměnná v definici funkce, zatímco argument jsou skutečné dosazené hodnoty při jejím volání.

Parametry mohou být také označeny jako nepovinné. Je nutné jim v definici funkce uvést nějakou **výchozí hodnotu**. V případě, že při volání nebude parametr vyplněn, bude jeho hodnota uvnitř funkce právě tato výchozí. Když vyplněn bude, výchozí hodnota se nepoužíje a v proměnné uvnitř funkce bude vyplněná hodnota. Nepovinné parametry musí následovat až na konci, po všech povinných. Příklad:

```csharp
AddAndPrint(5);

void PrintSum(int a, int b = 1)
{
    Console.WriteLine(a + b);
}
```

Funkci určenou pro součet dvou čísel a vypsání výsledku voláme s hodnotou prvního parametru `a` nastavenou na 5. Protože `b` je nepovinný, není nutné jej uvést a použije se pro něj výchozí hodnota 1. Program tedy vypíše součet 5 a 1, čili 6.
