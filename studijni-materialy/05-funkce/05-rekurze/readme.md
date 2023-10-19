# Rekurze

S funkcemi souvisí pojem rekurze. Jedná se o techniku, při níž funkce **volá sama sebe** ve svém těle. Například:

```csharp
PrintSequence(1, 5);

void PrintSequence(int start, int end)
{
    if (start > end)
    {
        return;
    }
    
    Console.WriteLine(start);

    PrintSequence(start + 1, end);
}
```

Funkce vypisuje posloupnost celých čísel od `start` po `end`. V podstatě se využívá skutečnost, že vypsat čísla např. od 1 do 5 se dá rozložit jako

- vypsat 1,
- vypsat čísla od 2 do 5.

Druhý krok se dá opět rozložit na

- vypsat 2,
- vypsat čísla od 3 do 5.

A tak dále. Když je funkce s těmito parametry zavolána, první podmínka neplatí. Vypíše se tedy `start` (1) a funkce se zavolá znovu, tentokrát se ale parametr `start` nastavuje na nynejší `start` zvýšený o 1. `end` se předává stejný. Má se tedy vypisovat od 2 do 5. Stávající funkce ještě nekončí – program se zatím nevrací zpět. Dojde k založení nového volání téže funkce a vykonávání přejde do něj. V tomto volání bude `start` roven 2. Opět se vypíše a funkce znovu zavolá sama sebe, tentokrát se `start` = 3. Takto se vypíšou čísla až do 5. Potom se `start` zvýší na 6 a v novém volání bude splněna podmínka, že je vyšší než `end` a funkce se tedy ukončí. Vykonávání se vrátí do předchozího volání. Funkce zavolala sama sebe vždy na samém konci svého těla, po návratu proto již není co dále vykonávat a toto volání se také ukončí. To předchozí stejně tak, a tak dále, až se dojde k tomu prvnímu. To se ukončí a program se vrátí do hlavního kódu.

Možná je přehlednější sledovat průběh rekurze krokováním programu, které je rozebráno v [tomto studijním materiálu Pardubického hackera](/studijni-materialy/03-tipy-k-reseni/02-debugovani). Mimo to je krokování velice užitečný nástroj při hledání a opravě chyb v programu.

S pomocí rekurze lze dosáhnout různých vcelku elegantních řešení. Platí ovšem, že jakýkoli problém řešitelný rekurzí se dá řešit i bez ní. Navíc je nezbytná opatrnost. Například: co by se stalo, kdyby v předchozí ukázce nebyla přítomna podmínka a `return`? Funkce by **donekonečna** volala sama sebe a program by nikdy neskončil. Respektive skončil, a to až takzavým [přetečením zásobníku](https://cs.wikipedia.org/wiki/P%C5%99ete%C4%8Den%C3%AD_z%C3%A1sobn%C3%ADku) (*stack overflow*), podle kterého je pojmenováno i jedno z programovacích fór.