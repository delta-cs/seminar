# Cykly

Vysvětlení cyklů a jejich syntaxe. Doporučené je chronologické čtení. Kódové příklady jsou psány v jazyce C#, ale ve většině jazyků jsou velice podobné. Přesná syntaxe se může lehce lišit – dohledat pro váš vybraný jazyk ji lze v jeho dokumentaci nebo v různých návodech.

Cykly jsou nástrojem otevírajícím v programování obrovské množství nových možností. Jejich základní účel je **vykonávat nějakou část kódu vícekrát, opakovaně** (cyklicky). Například: chtěli bychom napsat program, který třikrát vypíše nějakou zprávu. S dosavadními znalostmi by nejspíš vypadal takto:

```csharp
Console.WriteLine("Hello, world!");
Console.WriteLine("Hello, world!");
Console.WriteLine("Hello, world!");
```

Řádek, který zprávu vypisuje, je zkrátka třikrát nakopírován. Program, který dělá totéž, se dá napsat i za pomoci cyklu.

1. [While a do-while](01-while-a-do-while)
2. [For](02-for)
3. [Break a continue](03-break-a-continue)

Mimochodem, použitím cyklů se dá plně nahradit jakýkoli program napsaný za pomoci rekurze. Ta je rozebrána ve [výukových materiálech o funkcích](https://github.com/delta-cs/seminar/tree/main/studijni-materialy/05-funkce).