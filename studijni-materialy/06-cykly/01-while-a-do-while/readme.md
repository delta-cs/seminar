# While
Prvním cyklem, který si představíme, je `while`. Zapisuje se právě tímto klíčovým slovem následovaným závorkami, do kterých patří nějaká logická hodnota, stejně jako např. u podmínky `if`. Po nich přijdou složené závorky a v nich kód, který se má opakovaně vykonávat. `while` znamená anglicky *dokud*, kód v těle cyklu se tedy bude vykonávat **dokud bude výraz v závorkách platný** (`true`). Jakmile výraz přestane platit (bude `false`), znovu se kód nevykoná a program pokračuje dál pod cyklem. Příklad:

```csharp
while (10 > 5)
{
    Console.WriteLine("Ten is greater than five.");
}

Console.WriteLine("The end.");
```

Po spuštění program ověří výraz uvedený v závorkách. Pokud platí, začne se cyklus vykonávat, jinak se jeho tělo přeskočí a pokračuje se dál. V tomto případě výraz samozřejmě platí (10 je větší než 5), a tak se vypíše zpráva. Jakmile vykonávání dojde na konec těla cyklu, vrátí se znovu k logickému výrazu a opět jej ověří. Pokud výraz stále platí, tělo cyklu začne znovu. Jinak se přestane a pokračuje se dál. U tohoto příkladu však k druhé variantě nikdy nedojde – výraz se nemění a vždy bude platit (10 je vždy větší než 5). Znamená to jediné: cyklus se bude opakovat **donekonečna** a program se nikdy nezasaví. Zpráva pod ním oznamující konec tedy nikdy nebude vypsána.

To není zrovna užitečné. Je sice žádoucí nějakou část programu vykonávat opakovaně, ne však navěky. Kód je nutné upravit tak, aby se výraz eventuelně dostal do stavu, kdy neplatí, a cyklus tedy skončil. To je ideální chvíle k zapojení proměnných. Příklad:

```csharp
int counter = 0;

while (counter < 3)
{
    counter++;
    Console.WriteLine("Hello, world!");
}

Console.WriteLine("The end.");
```

Proměnnou `counter` (*počítadlo*) nastavujeme zpočátku na nulu. Logický výraz cyklu tentokrát neobsahuje pevné hodnoty, ale právě tuto proměnnou. Když program dojde k cyklu, `counter` je samozřejmě menší než 3, tělo se tedy začne vykonávat. `counter` zvýší o 1 – použit je zkrácený zápis `counter++`, což je totéž jako

```csharp
counter = counter + 1;
```

Pak se vypíše zpráva. Tím tělo končí a program se tedy znovu „ptá“ na podmínku, že je `counter` menší než 3. Znovu je splněna a proces se opakuje. Počítadlo se zvyšuje na 2 a zpráva je vypsána podruhé. Proměnná je stále menší než 3, takže dochází k dalšímu opakování. Navýšení `counter` na 3 a zase zpráva. Tělo je u konce a nastává zlom. `counter` už není menší než 3, cyklus se tedy **znovu neopakuje** a program pokračuje dál. Vypíše finální zprávu a končí. Kompletní výstup je tedy

```
Hello, world!
Hello, world!
Hello, world!
The end.
```

Tímto se dá nahradit program z přechozí stránky s třemi nakopírovanými řádky. Cyklus ale přináší mnoho benefitů: Představme si, že chceme zprávu vypsat ne třikrát, ale třeba tisíckrát. S prvním přístupem si zaplavíme zdrojový kód tisícem klonovaných řádků. U cyklu stačí přepsat jedno číslo ve výrazu. Nebo kdyby byla někdy potřeba vypisovanou zprávu, třeba jen lehce, pozměnit. Změnu bude nutné provést na jediném místě v těle cyklu. A další výhoda, která je snad úplně nejlepší: Počet vypsaných zpráv může záviset např. na hodnotě zadané uživatelem a být tak při každém běhu programu jiný:

```csharp
int totalCount = int.Parse(Console.ReadLine());
int counter = 0;

while (counter < totalCount)
{
    counter++;
    Console.WriteLine("Hello, world!");
}
```

Logika počítadla zůstává stejná, ale porovnává se s číslem ze vstupu programu.

Stejně jako u podmínek, těla cyklů mohou měnit hodnotu vnějších proměnných. Hodnota proměnných vytvořených vevnitř se však mezi jednotlivými průchody nezachovává. Příklad:

```csharp
int outsideCounter = 0;

while (outsideCounter < 3)
{
    int insideCounter = 0;

    Console.Write("inside: ");
    Console.WriteLine(insideCounter);

    Console.Write("outside: ");
    Console.WriteLine(outsideCounter);

    insideCounter++;
    outsideCounter++;
}
```

Program obsahuje dvě proměnné: `outsideCounter` vytvořený nad cyklem a `insideCounter` uvnitř. V každém průchodu vypíše a následně zvýší jejich hodnoty. Na vnějším počítadle se to (jak již známo) projeví, vnitřní se ale na konci těla **smaže** a při příštím opakování **vytvoří znovu** s nulou. Výstupu to lze vyčíst:

```
inside: 0
outside: 0
inside: 0
outside: 1
inside: 0
outside: 2
```

Ze stejného důvodu nelze k vnitřním proměnným přistupovat ani v podmínce cyklu:

```csharp
while (insideCounter < 3) // Zde `insideCounter` neexistuje.
{
    int insideCounter = 0;
		Console.WriteLine(insideCounter);
		insideCounter++;
}
```

# Do-while

Cyklu `while` je velmi podobný `do`-`while` (*dělat dokud*). V jeho zápise je namísto `while` a výrazu použito klíčové slovo `do`. Po něm následuje tělo cyklu ve složených závorkách. Až za nimi je potom `while`, závorky a v nich podmínka. Rozdíl oproti `while` spočívá v tom, že první provedení cyklu se vykoná **vždy**, nezávisle na splnění podmínky. Typickým použitím je třeba validace uživatelského vstupu:

```csharp
int input = 10;

do
{
    Console.WriteLine("Enter a number greater than five:");
    input = int.Parse(Console.ReadLine());
} while (input <= 5);
```

Program se bude opakovaně dožadovat zadání čísla většího než 5. Při použití `while` by se cyklus ani jednou neprovedl, protože `input` je zpočátku vyšší (10). Takto program první průchod provede vždy, nehledě na logický výraz. Alespoň jednou hodnotu načte a v případě, že není větší než 5, bude výzvu a načítání opakovat.